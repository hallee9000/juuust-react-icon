const Svgo = require("svgo");
const cheerio = require("cheerio");

/**
 * Convert string to CamelCase.
 * @param {string} str - A string.
 * @returns {string}
 */
function CamelCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
}

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @returns {Promise<string>}
 */
function optimize(svg, hasColor = false) {
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      ...(hasColor ? [] : [{ removeAttrs: { attrs: "(fill|stroke.*)" } }]),
      { removeTitle: true },
      { collapseGroups: false },
      { removeEmptyContainers: false },
    ],
  });

  return new Promise((resolve) => {
    svgo.optimize(svg).then(({ data }) => resolve(data));
  });
}

/**
 * remove SVG element.
 * @param {string} svg - An SVG string.
 * @returns {string}
 */
function removeSVGElement(svg) {
  const $ = cheerio.load(svg);
  return $("body")
    .children()
    .html();
}

const formatStringToCamelCase = (str) => {
  const splitted = str.split("-");
  if (splitted.length === 1) return splitted[0];
  return (
    splitted[0] +
    splitted
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")
  );
};

const getStyleObjectFromString = (str) => {
  let style = "{{ ";
  str.split(";").forEach((el) => {
    const [property, value] = el.split(":");
    if (!property) return;

    const formattedProperty = formatStringToCamelCase(property.trim());
    style += `${formattedProperty}: "${value.trim()}", `;
  });

  style += " }}";
  return style;
};

/**
 * Process SVG string.
 * @param {string} svg - An SVG string.
 * @param {Promise<string>}
 */
async function processSvg(svg, hasColor) {
  const optimized = await optimize(svg, hasColor)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then((svg) => svg.replace(/;/g, ""))
    // .then(removeSVGElement)
    .then((svg) =>
      svg.replace(/([a-z]+)-([a-z]+)=/g, (_, a, b) => `${a}${CamelCase(b)}=`)
    )
    .then((svgo) =>
      // 处理 inline style 头jsx style
      svgo.replace(
        /style="([^\"]+)"/g,
        (_, a) => `style=${getStyleObjectFromString(a)}`
      )
    );

  return optimized;
}

module.exports = processSvg;

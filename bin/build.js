/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require("path");
const fs = require("fs");
const format = require("prettier-eslint");
const processSvg = require("./processSvg");
const { parseName } = require("./utils");
const defaultStyle = process.env.npm_package_config_style || "stroke";
const { getAttrs, getElementCode } = require("./template");
const icons = require("../src/data.json");

const rootDir = path.join(__dirname, "..");

// where icons code in
const srcDir = path.join(rootDir, "dist");
const iconsDir = path.join(rootDir, "dist/icons");

// where index.js code in
const iconFile = path.join(rootDir, "dist", "index.js");
const iconFileD = path.join(rootDir, "dist", "index.d.ts");

// generate icons.js and icons.d.ts file
const generateIconsIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
    fs.mkdirSync(iconsDir);
  } else if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  const initialTypeDefinitions = `/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  `;

  fs.writeFileSync(iconFile, "", "utf-8");
  fs.writeFileSync(iconFileD, initialTypeDefinitions, "utf-8");
};

// generate attributes code
const attrsToString = (attrs, style) => {
  // console.log("style: ", style);
  return Object.keys(attrs)
    .map((key) => {
      // should distinguish fill or stroke
      if (key === "width" || key === "height" || key === style) {
        return key + "={" + attrs[key] + "}";
      }
      if (key === "otherProps") {
        return "{...otherProps}";
      }
      return key + '="' + attrs[key] + '"';
    })
    .join(" ");
};

// generate icon code separately
const generateIconCode = async ({ name }) => {
  const names = parseName(name, defaultStyle);
  // console.log(names);
  const location = path.join(rootDir, "src/svg", `${names.name}.svg`);
  const destination = path.join(rootDir, "dist/icons", `${names.name}.js`);
  const code = fs.readFileSync(location);
  const svgCode = await processSvg(code);
  const ComponentName = names.componentName;
  const element = getElementCode(
    ComponentName,
    attrsToString(getAttrs(names.style), names.style),
    svgCode
  );
  const component = format({
    text: element,
    eslintConfig: {
      extends: "airbnb",
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: "flow",
    },
  });
  fs.writeFileSync(destination, component, "utf-8");
  console.log("Successfully built", ComponentName);
  return { ComponentName, name: names.name };
};

// append export code to icons.js
const appendToIconsIndex = (infos) => {
  let exportString = "";
  let exportTypeString = "";
  infos.map(({ ComponentName, name }) => {
    exportString += `export { default as ${ComponentName} } from './icons/${name}';\r\n`;
    exportTypeString += `export const ${ComponentName}: Icon;\n`;
  });
  fs.writeFileSync(iconFile, exportString, "utf-8");
  fs.appendFileSync(iconFileD, exportTypeString, "utf-8");
};

generateIconsIndex();

const getComponentsInfo = async function() {
  const infoComponents = [];
  const iconKeys = Object.keys(icons).map((key) => icons[key]);
  for (const { name } of iconKeys) {
    // ignore the icon with '_' start
    const isIgnore = name.charAt(0) === "_";
    !isIgnore &&
      (await generateIconCode({ name }).then(({ ComponentName, name }) => {
        infoComponents.push({ ComponentName, name });
      }));
  }
  return infoComponents;
};
getComponentsInfo().then(appendToIconsIndex);

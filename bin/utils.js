const upperCamelCase = require('uppercamelcase')

const parseName = (name, defaultStyle) => {
  const nameSlices = name.split('-')
  const style = nameSlices[nameSlices.length - 1]
  // Remove the -Fill suffis from copmponent name after using it for setting the style
  const componentName = nameSlices.slice(0, nameSlices.length - 1).join('-')
  return {
    name,
    componentName: upperCamelCase(componentName),
    style: style==='fill' || style==='stroke' ? style : defaultStyle
  }
}

module.exports = {
  parseName
};

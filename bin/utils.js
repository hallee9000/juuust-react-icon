const upperCamelCase = require('uppercamelcase')

const parseName = (name, defaultStyle) => {
  const nameSlices = name.split('-')
  const style = nameSlices[nameSlices.length - 1]
  // Remove the -Fill suffis from copmponent name after using it for setting the style
  // And move the "Icon" to the end of the component name
  const componentName = nameSlices.slice(1, nameSlices.length - 1).join('-') + 'Icon'
  return {
    name,
    componentName: upperCamelCase(componentName),
    style: style==='fill' || style==='stroke' ? style : defaultStyle
  }
}

module.exports = {
  parseName
};

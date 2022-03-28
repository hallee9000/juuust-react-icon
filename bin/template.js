const getAttrs = (style, isSm = false) => {
  const baseAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "size",
    height: "size",
    viewBox: isSm ? "0 0 16 16" : "0 0 24 24",
  };
  const fillAttrs = {
    fill: "color",
    otherProps: "...otherProps",
  };
  const strokeAttrs = {
    fill: "none",
    stroke: "color",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    otherProps: "...otherProps",
  };
  return Object.assign(
    {},
    baseAttrs,
    style === "fill" ? fillAttrs : strokeAttrs
  );
};

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  import PropTypes from 'prop-types';

  const loadingCircleStyle = '@keyframes loadingCircle { 100% { transform: rotate(360deg) }}';

  const ${ComponentName} = (props) => {
    const { color, size, spin, style, className, ...otherProps } = props;
    return <span className={className} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <style children={loadingCircleStyle} />
      <svg ${attrs} style={{
        ...style,
        ...(spin ? {
          animationDuration: '1s',
          animationIterationCount: 'infinite',
          animationName: 'loadingCircle',
          animationTimingFunction: 'linear'
        } : {}),
        cursor: 'pointer'
        }} >
        ${svgCode}
      </svg>
    </span>
  };

  ${ComponentName}.propTypes = {
    spin: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ${ComponentName}.defaultProps = {
    spin: false,
    color: 'currentColor',
    size: '16',
  }

  export default ${ComponentName}
`;

module.exports = { getAttrs, getElementCode };

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Export = props => {
  const {
    color,
    size,
    spin,
    style,
    className,
    iconClassName,
    ...otherProps
  } = props;
  return (
    <span
      role="img"
      className={
        className
          ? 'tant-icon-span anticon ' + className
          : 'tant-icon-span anticon'
      }
    >
      <style children={loadingCircleStyle} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        {...otherProps}
        className={iconClassName}
        style={{
          ...style,
          ...(spin
            ? {
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationName: 'loadingCircle',
                animationTimingFunction: 'linear'
              }
            : {})
        }}
      >
        <path d="M17.684 11.93l-.296-1.503A5.49 5.49 0 0012 6a5.496 5.496 0 00-4.876 2.964l-.496.951-1.067.114A3.994 3.994 0 002 14c0 2.205 1.795 4 4 4h3v2H6c-3.31 0-6-2.69-6-6 0-3.09 2.34-5.64 5.35-5.96A7.496 7.496 0 0112 4a7.49 7.49 0 017.35 6.04c2.6.18 4.65 2.32 4.65 4.96 0 2.76-2.24 5-5 5h-4v-2h4c1.655 0 3-1.345 3-3a2.976 2.976 0 00-2.788-2.965l-1.528-.106z"></path>
        <path d="M13 13h3l-4 4-4-4h3V9h2v4z"></path>
      </svg>
    </span>
  );
};

Export.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Export.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Export;

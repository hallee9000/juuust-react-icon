import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Rename = props => {
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4h2v16H8v-2H5a3 3 0 01-3-3V9a3 3 0 013-3h3V4zm0 12V8H5a1 1 0 00-1 1v6a1 1 0 001 1h3zm4 0h7a1 1 0 001-1V9a1 1 0 00-1-1h-7V6h7a3 3 0 013 3v6a3 3 0 01-3 3h-7v-2z"
        ></path>
      </svg>
    </span>
  );
};

Rename.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Rename.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Rename;

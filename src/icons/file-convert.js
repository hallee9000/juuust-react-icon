import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const FileConvert = props => {
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
        <path d="M9 8v4H7l4 4V8H9z"></path>
        <path d="M15 16v-4h2l-4-4v8h2z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.999 2A.995.995 0 003 2.992v18.016a1 1 0 00.993.992h16.014A1 1 0 0021 20.993V7l-5-5H3.999zM5 4h10v4h4v12H5V4z"
        ></path>
      </svg>
    </span>
  );
};

FileConvert.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileConvert.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default FileConvert;

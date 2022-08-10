import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Education = props => {
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
        <path d="M4 2h16v2h-3v4A5 5 0 017 8V4H4V2zm5 2v2h6V4H9zm0 3v1a3 3 0 106 0V7H9z"></path>
        <path d="M6 5H4v7h2V5z"></path>
        <path d="M17 18a2 2 0 00-2-2H9a2 2 0 00-2 2v4H5v-4a4 4 0 014-4h6a4 4 0 014 4v4h-2v-4z"></path>
      </svg>
    </span>
  );
};

Education.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Education.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Education;

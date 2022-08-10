import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const VPropertySm = props => {
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
        viewBox="0 0 16 16"
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
        <path d="M4.5 3L7 4.5v3L4.5 9 2 7.5v-3L4.5 3zM3 5.066v1.868l1.5.9 1.5-.9V5.066l-1.5-.9-1.5.9z"></path>
        <path d="M14 3h-4v1h4V3z"></path>
        <path d="M10 7h4v1h-4V7z"></path>
        <path d="M14 12v1H2v-1h12z"></path>
      </svg>
    </span>
  );
};

VPropertySm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VPropertySm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default VPropertySm;

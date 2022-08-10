import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const DashboardCl = props => {
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
          d="M20 3h-6a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1z"
          fill="#7639F0"
          fillOpacity=".3"
        ></path>
        <path
          d="M3 4v8a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1z"
          fill="#7639F0"
        ></path>
        <path
          d="M3 16v4a1 1 0 001 1h6a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1z"
          fill="#7639F0"
        ></path>
        <path
          d="M14 21a1 1 0 01-1-1v-8a1 1 0 011-1h6a1 1 0 011 1v8a1 1 0 01-1 1h-6z"
          fill="#7639F0"
        ></path>
      </svg>
    </span>
  );
};

DashboardCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DashboardCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default DashboardCl;

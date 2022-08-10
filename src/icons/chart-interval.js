import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartInterval = props => {
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
        <path d="M5 3h4v2H8v3h2a1 1 0 011 1v8a1 1 0 01-1 1H8v2H6v-2H4a1 1 0 01-1-1V9a1 1 0 011-1h2V5H5V3zm4 7H5v6h4v-6z"></path>
        <path d="M21 14a1 1 0 01-1 1h-2v3h1v2h-4v-2h1v-3h-2a1 1 0 01-1-1V6a1 1 0 011-1h2V3h2v2h2a1 1 0 011 1v8zm-6-7v6h4V7h-4z"></path>
      </svg>
    </span>
  );
};

ChartInterval.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartInterval.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartInterval;

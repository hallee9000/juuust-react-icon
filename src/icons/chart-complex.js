import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartComplex = props => {
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
        <path d="M21 6l-6.5-3-5.338 5.885L3.5 7.5l-.485 1.94 6.823 1.675 5.24-5.777 5.238 2.542L21 6z"></path>
        <path d="M16 11h-3v10h3V11z"></path>
        <path d="M11 16H8v5h3v-5z"></path>
        <path d="M18 14h3v7h-3v-7z"></path>
        <path d="M6 14H3v7h3v-7z"></path>
      </svg>
    </span>
  );
};

ChartComplex.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartComplex.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartComplex;

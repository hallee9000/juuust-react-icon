import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartHistogram = props => {
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
        <path d="M13 3h3v14h-3V3z"></path>
        <path d="M3 11h3v6H3v-6z"></path>
        <path d="M8 6h3v11H8V6z"></path>
        <path d="M18 9h3v8h-3V9z"></path>
        <path d="M2 19h4v2H2v-2z"></path>
        <path d="M11 19H8v2h3v-2z"></path>
        <path d="M13 19h3v2h-3v-2z"></path>
        <path d="M22 19h-4v2h4v-2z"></path>
      </svg>
    </span>
  );
};

ChartHistogram.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartHistogram.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartHistogram;

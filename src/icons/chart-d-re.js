import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartDRe = props => {
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
        <path d="M6 8H3v3h3V8z"></path>
        <path d="M8 8h3v3H8V8z"></path>
        <path d="M6 13H3v3h3v-3z"></path>
        <path d="M3 18h3v3H3v-3z"></path>
        <path d="M11 13H8v3h3v-3z"></path>
        <path d="M13 8h3v3h-3V8z"></path>
        <path d="M21 3H3v3h18V3z"></path>
      </svg>
    </span>
  );
};

ChartDRe.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartDRe.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartDRe;

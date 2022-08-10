import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartCum = props => {
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
        <path d="M17 4h3v3h-3V4z"></path>
        <path d="M17 10h3v10h-3V10z"></path>
        <path d="M3 14.583h3V20H3v-5.417z"></path>
        <path d="M13 12.75h-3V20h3v-7.25z"></path>
        <path d="M6 9H3v3h3V9z"></path>
        <path d="M13 7h-3v3h3V7z"></path>
      </svg>
    </span>
  );
};

ChartCum.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartCum.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartCum;

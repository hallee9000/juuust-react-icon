import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const TX2y = props => {
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
        <path d="M5 15v2c0 1.054.95 2 2 2h3v2H7a4 4 0 01-4-4v-2h2zM17 3a4 4 0 014 4v2h-2V7a2 2 0 00-2-2h-3V3h3z"></path>
        <path d="M16.5 14.613L18.765 11h2.161l-3.257 4.959L21 21h-2.183L16.5 17.332 14.176 21H12l3.338-5.041L12.074 11h2.161l2.265 3.613z"></path>
        <path d="M7.504 7.739L9.953 3H12L8.432 9.319V13H6.575V9.319L3 3h2.054l2.45 4.739z"></path>
      </svg>
    </span>
  );
};

TX2y.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TX2y.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default TX2y;

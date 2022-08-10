import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Plug = props => {
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
        <path d="M13 18v2h6v2h-6a2 2 0 01-2-2v-2H8a4 4 0 01-4-4V7a1 1 0 011-1h3V2h2v4h4V2h2v4h3a1 1 0 011 1v7a4 4 0 01-4 4h-3zm-5-2h8a2 2 0 002-2v-3H6v3a2 2 0 002 2zm10-8H6v1h12V8zm-6 6.5a1 1 0 110-2 1 1 0 010 2z"></path>
      </svg>
    </span>
  );
};

Plug.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Plug.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Plug;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const MProperty = props => {
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
        <path d="M5 5a3 3 0 013-3h12a3 3 0 013 3v14a3 3 0 01-3 3h-7v-2h7a1 1 0 001-1V5a1 1 0 00-1-1H8a1 1 0 00-1 1v3H5V5z"></path>
        <path d="M9 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path d="M1 21a4 4 0 014-4h2a4 4 0 014 4v1a1 1 0 01-1 1H2a1 1 0 01-1-1v-1z"></path>
        <path d="M13 8h2v8h-2V8z"></path>
        <path d="M19 12h-2v4h2v-4z"></path>
      </svg>
    </span>
  );
};

MProperty.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MProperty.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default MProperty;

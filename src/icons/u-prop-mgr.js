import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const UPropMgr = props => {
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
        <path d="M8 2a3 3 0 00-3 3v3h2V5a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-7v2h7a3 3 0 003-3V5a3 3 0 00-3-3H8z"></path>
        <path d="M6 16a3 3 0 100-6 3 3 0 000 6z"></path>
        <path d="M5 17a4 4 0 00-4 4v1a1 1 0 001 1h8a1 1 0 001-1v-1a4 4 0 00-4-4H5z"></path>
        <path d="M18 7h-5v2h5V7z"></path>
        <path d="M13 11h5v2h-5v-2z"></path>
        <path d="M18 15h-5v2h5v-2z"></path>
      </svg>
    </span>
  );
};

UPropMgr.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPropMgr.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default UPropMgr;

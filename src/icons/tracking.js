import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Tracking = props => {
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
        <path d="M13 1h-2v16h2V1z"></path>
        <path d="M4 6a2 2 0 114 0 2 2 0 01-4 0z"></path>
        <path d="M18 9a2 2 0 100 4 2 2 0 000-4z"></path>
        <path d="M7 13V9H5v4h2z"></path>
        <path d="M19 4h-2v4h2V4z"></path>
        <path d="M.742 13.5v3.423a1 1 0 00.5.866L11.5 23.71a1 1 0 001 0l10.258-5.922a1 1 0 00.5-.866V13.5L12 20 .742 13.5z"></path>
      </svg>
    </span>
  );
};

Tracking.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Tracking.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Tracking;

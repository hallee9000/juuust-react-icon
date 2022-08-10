import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const MEvent = props => {
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
        <path d="M21 12a9 9 0 01-12.25 8.395 4.009 4.009 0 01-1.185 1.674C8.922 22.668 10.422 23 12 23c6.075 0 11-4.925 11-11 0-1.578-.332-3.078-.93-4.435a4.009 4.009 0 01-1.675 1.185A8.979 8.979 0 0121 12z"></path>
        <path d="M3 12c0 1.146.214 2.242.605 3.25a4.007 4.007 0 00-1.674 1.185A10.962 10.962 0 011 12C1 5.925 5.925 1 12 1c1.578 0 3.078.332 4.435.93a4.007 4.007 0 00-1.185 1.675A9 9 0 003 12z"></path>
        <path d="M18.071 11L7.464 7.464 11 18.071l2.121-4.95L18.071 11z"></path>
        <path d="M21 5a2 2 0 11-4 0 2 2 0 014 0z"></path>
        <path d="M5 21a2 2 0 100-4 2 2 0 000 4z"></path>
      </svg>
    </span>
  );
};

MEvent.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MEvent.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default MEvent;

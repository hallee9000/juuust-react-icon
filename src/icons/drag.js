import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Drag = props => {
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
        <path d="M8.5 21c-.825 0-1.5-.675-1.5-1.5S7.675 18 8.5 18s1.5.675 1.5 1.5S9.325 21 8.5 21z"></path>
        <path d="M8.5 6C7.675 6 7 5.325 7 4.5S7.675 3 8.5 3s1.5.675 1.5 1.5S9.325 6 8.5 6z"></path>
        <path d="M8.5 13.5c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5z"></path>
        <path d="M15.5 3c.825 0 1.5.675 1.5 1.5S16.325 6 15.5 6 14 5.325 14 4.5 14.675 3 15.5 3z"></path>
        <path d="M15.5 18c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5-1.5-.675-1.5-1.5.675-1.5 1.5-1.5z"></path>
        <path d="M15.5 10.5c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5S14 12.825 14 12s.675-1.5 1.5-1.5z"></path>
      </svg>
    </span>
  );
};

Drag.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Drag.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Drag;

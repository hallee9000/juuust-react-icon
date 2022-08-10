import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const SortDown = props => {
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
        <path d="M18 2a1 1 0 011 1v15.172l1.879-1.88a1 1 0 011.414 1.415l-3.586 3.586a1 1 0 01-1.414 0l-3.586-3.586a1 1 0 011.414-1.414L17 18.172V3a1 1 0 011-1z"></path>
        <path d="M2 4a1 1 0 011-1h11a1 1 0 110 2H3a1 1 0 01-1-1z"></path>
        <path d="M3 8a1 1 0 000 2h9a1 1 0 100-2H3z"></path>
        <path d="M2 14a1 1 0 011-1h7a1 1 0 110 2H3a1 1 0 01-1-1z"></path>
        <path d="M3 18a1 1 0 100 2h5a1 1 0 100-2H3z"></path>
      </svg>
    </span>
  );
};

SortDown.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SortDown.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default SortDown;

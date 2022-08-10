import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Unlink = props => {
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
        <path d="M4.222 5.636l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.12z"></path>
        <path d="M5.636 9.879l-1.414 1.414a6 6 0 008.485 8.485l1.414-1.414-1.414-1.414-1.414 1.414a4 4 0 11-5.657-5.657l1.414-1.414-1.414-1.414z"></path>
        <path d="M16.95 12.707l1.414-1.414a4 4 0 00-5.657-5.657L11.293 7.05 9.879 5.636l1.414-1.414a6 6 0 018.485 8.485l-1.414 1.414-1.414-1.414z"></path>
        <path d="M17.657 16.243l-1.415 1.414 2.122 2.121 1.414-1.414-2.121-2.121z"></path>
      </svg>
    </span>
  );
};

Unlink.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Unlink.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Unlink;

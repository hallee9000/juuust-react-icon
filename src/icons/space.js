import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Space = props => {
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
        <path d="M11.5 1.289a1 1 0 011 0l8.526 4.922a1 1 0 01.5.866v9.846a1 1 0 01-.5.866L12.5 22.71a1 1 0 01-1 0L2.974 17.79a1 1 0 01-.5-.866V7.077a1 1 0 01.5-.866L11.5 1.29zm-5.96 5.75l6.46 3.8 6.46-3.8L12 3.31 5.54 7.04zM4.473 8.733v7.612L12 20.691l7.526-4.346V8.733L12 13.16 4.474 8.733z"></path>
      </svg>
    </span>
  );
};

Space.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Space.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Space;

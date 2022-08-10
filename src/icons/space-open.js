import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const SpaceOpen = props => {
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 1.289a1 1 0 00-1 0L2.974 6.21a1 1 0 00-.5.866v9.846a1 1 0 00.5.866L11.5 22.71a1 1 0 001 0l8.526-4.922a1 1 0 00.5-.866V7.077a1 1 0 00-.5-.866L12.5 1.29zM4.474 16.345V8.733L12 13.16l7.526-4.427v7.612L12 20.691l-7.526-4.346z"
        ></path>
      </svg>
    </span>
  );
};

SpaceOpen.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SpaceOpen.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default SpaceOpen;

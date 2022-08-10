import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Pattern = props => {
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
        <path d="M13 1h-2v7h2V1z"></path>
        <path d="M7 3h2v3H7V3z"></path>
        <path d="M15 3h2v3h-2V3z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.558 5.874l-.584.337a1 1 0 00-.5.866v9.846a1 1 0 00.5.866L11.5 22.71a1 1 0 001 0l8.526-4.922a1 1 0 00.5-.866V7.077a1 1 0 00-.5-.866l-.584-.337L12 10.84 3.558 5.874zM12 13.16l7.526-4.427v5.612L12 18.691l-7.526-4.346V8.733L12 13.16z"
        ></path>
      </svg>
    </span>
  );
};

Pattern.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pattern.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Pattern;

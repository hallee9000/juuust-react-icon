import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const StarOutline = props => {
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
        <path d="M15.461 8.047L12 2 8.539 8.047 2 9.639l4.4 5.33L5.82 22 12 19.247 18.18 22l-.58-7.031 4.4-5.33-6.539-1.592zm2.965 2.78l-2.886 3.496.37 4.476L12 17.058l-3.91 1.74.37-4.475-2.886-3.496 4.274-1.04L12 6.027l2.152 3.76 4.274 1.04z"></path>
      </svg>
    </span>
  );
};

StarOutline.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StarOutline.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default StarOutline;

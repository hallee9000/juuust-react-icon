import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const User1 = props => {
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
          d="M17 8A5 5 0 117 8a5 5 0 0110 0zm-2 0a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v3H4v-3zm14.1 0c0-.64-3.13-2.1-6.1-2.1-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V18z"
        ></path>
      </svg>
    </span>
  );
};

User1.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

User1.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default User1;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const IdFreeze = props => {
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
          d="M20.543 20.957l-17.5-17.5-1.25 1.25L3 5.914v13.091C3 20.107 3.893 21 4.995 21h13.09l1.208 1.207 1.25-1.25zM5 19V7.914l6.15 6.15a6.995 6.995 0 00-4.929 3.138 9.98 9.98 0 001.751.978 4.996 4.996 0 015.237-2.057L16.086 19H5z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.414 3h13.591C20.107 3 21 3.893 21 4.995v13.59l-2-2V5H7.414l-2-2z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.483 7.068l1.414 1.415a1.5 1.5 0 112.12 2.12l1.415 1.414a3.5 3.5 0 10-4.949-4.95z"
        ></path>
      </svg>
    </span>
  );
};

IdFreeze.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IdFreeze.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default IdFreeze;

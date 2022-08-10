import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const VProperty = props => {
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
        <path d="M22 3H9v2h13V3z"></path>
        <path d="M22 11h-6v2h6v-2z"></path>
        <path d="M22 21v-2H9v2h13z"></path>
        <path d="M6.5 7L11 9.5v5L6.5 17 2 14.5v-5L6.5 7zM4 10.677v2.646l2.5 1.39 2.5-1.39v-2.646l-2.5-1.39-2.5 1.39z"></path>
      </svg>
    </span>
  );
};

VProperty.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VProperty.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default VProperty;

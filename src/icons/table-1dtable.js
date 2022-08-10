import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Table1dtable = props => {
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
        <path d="M22 3H2v3h20V3z"></path>
        <path d="M8 8H2v3h6V8z"></path>
        <path d="M2 13h6v3H2v-3z"></path>
        <path d="M8 18H2v3h6v-3z"></path>
        <path d="M10 8h5v3h-5V8z"></path>
        <path d="M15 13h-5v3h5v-3z"></path>
        <path d="M10 18h5v3h-5v-3z"></path>
        <path d="M22 8h-5v3h5V8z"></path>
        <path d="M17 13h5v3h-5v-3z"></path>
        <path d="M22 18h-5v3h5v-3z"></path>
      </svg>
    </span>
  );
};

Table1dtable.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Table1dtable.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Table1dtable;

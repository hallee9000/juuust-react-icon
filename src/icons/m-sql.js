import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const MSql = props => {
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
        <path d="M22 2H2v3h20V2z"></path>
        <path d="M18.891 17.477a6.002 6.002 0 00-9.134-7.72 6 6 0 007.72 9.134l2.887 2.887 1.414-1.414-2.887-2.887zm-2.063-.649a4 4 0 11-5.656-5.656 4 4 0 015.656 5.656z"></path>
        <path d="M2 12h4v2H2v-2z"></path>
        <path d="M6 16H2v2h4v-2z"></path>
        <path d="M2 20h4v2H2v-2z"></path>
        <path d="M6 8H2v2h4V8z"></path>
      </svg>
    </span>
  );
};

MSql.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MSql.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default MSql;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const FirstLast = props => {
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
        <path d="M8.83 5A3.001 3.001 0 105 8.83V17a2 2 0 002 2h8.17A3.001 3.001 0 1019 15.17V7a2 2 0 00-2-2H8.83zM7 8.83A3.008 3.008 0 008.83 7H17v8.17A3.009 3.009 0 0015.17 17H7V8.83zM5 6a1 1 0 112 0 1 1 0 01-2 0zm12 12a1 1 0 112 0 1 1 0 01-2 0z"></path>
      </svg>
    </span>
  );
};

FirstLast.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FirstLast.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default FirstLast;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const TimeLock = props => {
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
        <path d="M12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.811 5.741L17 12h3a8 8 0 10-2.46 5.772l.998 1.795A9.96 9.96 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 5a3 3 0 013 3v1h1v5H8v-5h1v-1a3 3 0 013-3zm0 2a1 1 0 00-.993.883L11 10v1h2v-1a1 1 0 00-.883-.993L12 9z"></path>
      </svg>
    </span>
  );
};

TimeLock.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TimeLock.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default TimeLock;

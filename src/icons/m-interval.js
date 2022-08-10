import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const MInterval = props => {
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
        <path d="M9 2H4v3h5V2z"></path>
        <path d="M13 16h9V4h-3V2h-3v2h-3v12zm2-2V7h5v7h-5z"></path>
        <path d="M2 20V8h9v12H8v2H5v-2H2zm2-10v7h5v-7H4z"></path>
        <path d="M15 19h5v3h-5v-3z"></path>
      </svg>
    </span>
  );
};

MInterval.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MInterval.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default MInterval;

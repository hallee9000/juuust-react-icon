import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const UTagSm = props => {
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
        viewBox="0 0 16 16"
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
        <path d="M14 2.2a.2.2 0 00-.2-.2H7.2a.2.2 0 00-.2.2V3H6V2a1 1 0 011-1h7a1 1 0 011 1v8.465a1 1 0 01-.445.832l-3.5 2.333a1.011 1.011 0 01-.055.034v-1.2l3-2V2.2z"></path>
        <path d="M6.5 12a1 1 0 11-2 0 1 1 0 012 0z"></path>
        <path d="M2 4a1 1 0 00-1 1v7.465a1 1 0 00.445.832l3.5 2.333a1 1 0 001.11 0l3.5-2.333a1 1 0 00.445-.832V5a1 1 0 00-1-1H2zm7 1.2v7.265l-3.39 2.26a.2.2 0 01-.22 0L2 12.464V5.2c0-.11.09-.2.2-.2h6.6c.11 0 .2.09.2.2z"></path>
      </svg>
    </span>
  );
};

UTagSm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTagSm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default UTagSm;

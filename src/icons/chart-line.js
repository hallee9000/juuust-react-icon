import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartLine = props => {
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
        <path d="M15.504 12.821l6.398-7.512L20.395 4l-5.248 6.179-3.19-2.134a3.488 3.488 0 01-.875 1.817l4.422 2.96z"></path>
        <path d="M5.468 9.249a3.516 3.516 0 001.463 1.38l-3.378 4.124L2 13.5l3.468-4.251z"></path>
        <path d="M15.674 17.542L22 13.687 20.93 12l-5.704 3.458-6.974-1-5.827 3.855L3.495 20 8.7 16.542l6.974 1z"></path>
        <path d="M8.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
      </svg>
    </span>
  );
};

ChartLine.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartLine.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartLine;

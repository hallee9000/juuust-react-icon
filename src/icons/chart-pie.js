import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartPie = props => {
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
        <path d="M11.25 4.035a8 8 0 107.325 12.524l-1.315-.74a6.5 6.5 0 11-6.01-10.277V4.036z"></path>
        <path d="M19.311 15.252A7.97 7.97 0 0020 12.008v-.014a7.974 7.974 0 00-2.411-5.718 7.974 7.974 0 00-4.839-2.241v7.526l6.561 3.691z"></path>
      </svg>
    </span>
  );
};

ChartPie.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartPie.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartPie;

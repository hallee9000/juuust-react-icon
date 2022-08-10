import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartScatter = props => {
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
        <path d="M2 21h20v1H2v-1z"></path>
        <path d="M7 14.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
        <path d="M22 15a2 2 0 11-4 0 2 2 0 014 0z"></path>
        <path d="M8 7a2 2 0 11-4 0 2 2 0 014 0z"></path>
        <path d="M12 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
        <path d="M20 6a1 1 0 11-2 0 1 1 0 012 0z"></path>
        <path d="M15 11.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"></path>
      </svg>
    </span>
  );
};

ChartScatter.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartScatter.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartScatter;

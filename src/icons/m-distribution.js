import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const MDistribution = props => {
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
        <path d="M9 3H2v4h7V3z"></path>
        <path d="M22 3H12v4h10V3z"></path>
        <path d="M2 10h10v4H2v-4z"></path>
        <path d="M9 17H2v4h7v-4z"></path>
        <path d="M15 10h7v4h-7v-4z"></path>
        <path d="M22 17H12v4h10v-4z"></path>
      </svg>
    </span>
  );
};

MDistribution.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MDistribution.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default MDistribution;

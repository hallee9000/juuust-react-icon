import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const DashboardMgr = props => {
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
        <path d="M22 2h-5v3h5V2z"></path>
        <path d="M17 10h5v3h-5v-3z"></path>
        <path d="M22 18h-5v3h5v-3z"></path>
        <path d="M14 2H2v3h12V2z"></path>
        <path d="M2 10h12v3H2v-3z"></path>
        <path d="M14 18H2v3h12v-3z"></path>
      </svg>
    </span>
  );
};

DashboardMgr.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DashboardMgr.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default DashboardMgr;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const SystemMgr = props => {
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
        <path d="M5 5h3v2H5V5z"></path>
        <path d="M17.16 9.634l-1.156.391v.001a3.975 3.975 0 00-1.434-.83L14.33 8h-2l-.239 1.195a3.985 3.985 0 00-1.435.83L9.5 9.634l-1 1.732.916.805a4.017 4.017 0 000 1.658l-.916.805 1 1.732 1.156-.392c.415.374.903.657 1.434.83L12.33 18h2l.239-1.195a3.985 3.985 0 001.435-.83l1.156.391 1-1.732-.916-.805a4.017 4.017 0 000-1.658l.916-.805-1-1.732zM15.33 13a2 2 0 11-4 0 2 2 0 014 0z"></path>
        <path d="M3 2h18a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm1 2v16h16V4H4z"></path>
      </svg>
    </span>
  );
};

SystemMgr.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SystemMgr.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default SystemMgr;

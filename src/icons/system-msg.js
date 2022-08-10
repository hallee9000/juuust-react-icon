import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const SystemMsg = props => {
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
        <path d="M20 20H4v-5h1.833l1.461.986a3 3 0 001.679.514h6.054a3 3 0 001.679-.514L18.167 15H20v5zM3 13a1 1 0 00-1 1v7a1 1 0 001 1h18a1 1 0 001-1v-7a1 1 0 00-1-1h-3.139a1 1 0 00-.559.171l-1.715 1.158a1 1 0 01-.56.171H8.973a1 1 0 01-.56-.171L6.698 13.17a1 1 0 00-.56-.171H3z"></path>
        <path d="M20 3a1 1 0 00-1-1H5a1 1 0 00-1 1v9h2V4h12v8h2V3z"></path>
        <path d="M8 6h8v2H8V6z"></path>
        <path d="M16 10H8v2h8v-2z"></path>
      </svg>
    </span>
  );
};

SystemMsg.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SystemMsg.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default SystemMsg;

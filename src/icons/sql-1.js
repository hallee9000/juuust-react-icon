import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Sql1 = props => {
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
        <path d="M16.622 15.143l1.81 2.34h-2.344l-.92-1.184c-.758.417-1.607.623-2.54.623-1.56 0-2.86-.54-3.893-1.615-1.033-1.076-1.549-2.36-1.549-3.848 0-.994.242-1.908.722-2.74a5.354 5.354 0 011.985-1.983A5.303 5.303 0 0112.605 6c1.476 0 2.742.532 3.801 1.598 1.06 1.064 1.59 2.363 1.59 3.896 0 1.41-.46 2.625-1.374 3.65zm-.607-3.663c0-.985-.333-1.821-.998-2.51-.666-.687-1.47-1.032-2.415-1.032-.972 0-1.785.336-2.442 1.003-.656.67-.984 1.52-.984 2.553 0 1.15.412 2.06 1.24 2.728a3.41 3.41 0 002.203.785c.471 0 .916-.091 1.331-.277l-1.86-2.395h2.36l.937 1.21a3.61 3.61 0 00.628-2.065z"></path>
        <path d="M6.354 7.678c-.546-.637-1.055-1.076-1.521-1.312a3.21 3.21 0 00-1.484-.361c-.806 0-1.486.257-2.034.773C.765 7.294.49 7.913.49 8.634c0 .5.164 1.001.494 1.503.33.501 1.065 1.214 2.196 2.137.594.486.978.844 1.154 1.08.175.237.262.472.262.709 0 .26-.115.49-.347.686a1.27 1.27 0 01-.858.298c-.651 0-1.228-.46-1.727-1.378L0 14.672c.391.778.862 1.348 1.41 1.71.552.364 1.196.545 1.937.545.947 0 1.716-.28 2.306-.835.589-.555.884-1.26.884-2.114a2.92 2.92 0 00-.251-1.212c-.166-.37-.452-.757-.853-1.162-.16-.167-.619-.565-1.374-1.195-.806-.683-1.29-1.128-1.45-1.336a.797.797 0 01-.179-.495c0-.176.085-.333.249-.471.166-.138.377-.209.637-.209.535 0 1.057.357 1.573 1.074l1.465-1.294z"></path>
        <path d="M21.115 6.263h-1.978V16.66H24v-1.887h-2.885v-8.51z"></path>
      </svg>
    </span>
  );
};

Sql1.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Sql1.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Sql1;

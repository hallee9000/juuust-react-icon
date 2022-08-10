import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const VPropCl = props => {
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
        <path d="M22 2H8v2.222h14V2z" fill="#ACAFBD"></path>
        <path d="M22 10.889h-6.461v2.222H22V10.89z" fill="#ACAFBD"></path>
        <path d="M22 22v-2.222H8V22h14z" fill="#ACAFBD"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 9.222L6 6.444 1 9.222v5.556l5 2.777 5-2.777V9.222zm-5 5a2.222 2.222 0 100-4.444 2.222 2.222 0 000 4.444z"
          fill="#0A1032"
        ></path>
      </svg>
    </span>
  );
};

VPropCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VPropCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default VPropCl;

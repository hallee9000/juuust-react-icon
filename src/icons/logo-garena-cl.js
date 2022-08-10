import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const LogoGarenaCl = props => {
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
        <path
          d="M7.932 12.964s1.469-2.947 7.601-1.245c0 0 .931 1.3 4.916.897 0 0-2.025 1.935-3.404 5.073 0 0-1.338 4.206-9.192 3.137 0 0-6.49-1.5-5.459-7.11 0 0 1.054-4.858 6.773-5.637l.638-.166s-2.028-1.122-6.048.676l-1.167.537L0 8.885s1.037-2.228 3.507-3.731h.25l3.714-2.228-2.025 1.825 2.717-1.18S12.41 2.466 14.013 2l-5.22 3.261s2.663-.563 3.925-.59l.288.59s2.682-.08 4.3.752c0 0-1.124 2.442 6.694 1.395l-.453.505-2.921 1.052-1.059.322.733.355.326.236h-4.257s-5.063-3.546-8.773 1.154c0 0-4.127 4.719-.432 8.106 0 0 6.594 3.301 7.859-4.697 0 0-1.015-4.077-6.119-1.37 0 0 1.029 1.287.027 1.716 0 0-2.337.553-.923-1.715"
          fill="#E41E26"
        ></path>
      </svg>
    </span>
  );
};

LogoGarenaCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoGarenaCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default LogoGarenaCl;

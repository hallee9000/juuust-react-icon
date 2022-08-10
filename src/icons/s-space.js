import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const SSpace = props => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 21a1 1 0 001 1h16a1 1 0 001-1V3a1 1 0 00-1-1H4a1 1 0 00-1 1v18zm2-10.36V4h14v6.64L11.83 6.5a1 1 0 00-1.366.366l-2 3.464 1.732 1 1.5-2.598L19 12.95V20H5v-7.051l6.66 3.845a1 1 0 001.366-.366l2-3.464-1.732-1-1.5 2.598L5 10.64z"
        ></path>
      </svg>
    </span>
  );
};

SSpace.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SSpace.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default SSpace;

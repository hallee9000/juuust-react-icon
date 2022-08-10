import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ArrayRowsSm = props => {
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
        viewBox="0 0 16 16"
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
          d="M6 3H3v2h3V3zM3 6h1v6a1 1 0 001 1h3v1a1 1 0 001 1h3a1 1 0 001-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1H5V9h3a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H9a1 1 0 00-1 1v1H5V6h1a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v2a1 1 0 001 1zm6 2v1h3V7H9v1zm0 6v-2h3v2H9z"
        ></path>
      </svg>
    </span>
  );
};

ArrayRowsSm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrayRowsSm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ArrayRowsSm;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Forewarning = props => {
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
        <path d="M7.5 12L12 6.5v5l2.5.5-4.5 5.5v-5L7.5 12z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1H3a1 1 0 00-1 1zm2 15V5h14v14H4z"
        ></path>
      </svg>
    </span>
  );
};

Forewarning.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Forewarning.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Forewarning;

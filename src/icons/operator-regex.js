import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const OperatorRegex = props => {
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
          d="M3.5 18v-3.7A1.5 1.5 0 002 12.8h-.5v-1.6H2a1.5 1.5 0 001.5-1.5V6a3 3 0 013-3h1v2h-1a1 1 0 00-1 1v4.1A2 2 0 014.126 12 2 2 0 015.5 13.9V18a1 1 0 001 1h1v2h-1a3 3 0 01-3-3zm17-3.7V18a3 3 0 01-3 3h-1v-2h1a1 1 0 001-1v-4.1a2 2 0 011.374-1.9 2 2 0 01-1.374-1.9V6a1 1 0 00-1-1h-1V3h1a3 3 0 013 3v3.7a1.5 1.5 0 001.5 1.5h.5v1.6H22a1.5 1.5 0 00-1.5 1.5zm-10 1.2a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.364-7.292L12.732 6h1.104l-.132 2.208 2.016-.816.348 1.032L13.944 9l1.452 1.644-.852.672-1.26-1.836-1.272 1.836-.852-.672L12.612 9 10.5 8.424l.348-1.032 2.016.816z"
        ></path>
      </svg>
    </span>
  );
};

OperatorRegex.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OperatorRegex.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default OperatorRegex;

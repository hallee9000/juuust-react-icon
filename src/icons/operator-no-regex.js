import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const OperatorNoRegex = props => {
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
          d="M18.006 3.043L20.049 1l1.414 1.414-1.662 1.662A3 3 0 0120.5 6v3.7a1.5 1.5 0 001.5 1.5h.5v1.6H22a1.5 1.5 0 00-1.5 1.5V18a3 3 0 01-3 3h-1v-2h1a1 1 0 001-1v-4.1a2 2 0 011.374-1.9 1.999 1.999 0 01-1.374-1.9V6a1 1 0 00-.13-.493l-2.457 2.457.155.46-.844.229-.842.843 1.014 1.148-.852.672-.807-1.176-4.034 4.034a1.5 1.5 0 11-2.029 2.029l-2.12 2.12A.999.999 0 006.5 19h1v2h-1a3 3 0 01-2.41-1.213l-2.676 2.676L0 21.049l3.5-3.5V14.3A1.5 1.5 0 002 12.8h-.5v-1.6H2a1.502 1.502 0 001.5-1.5V6a3 3 0 013-3h1v2h-1a1 1 0 00-1 1v4.1A2 2 0 014.126 12 2 2 0 015.5 13.9v1.649l6.67-6.67-1.67-.455.348-1.032 2 .81.015-.016L12.732 6h1.104l-.077 1.29L16.5 4.549V3h1a3 3 0 01.506.043z"
        ></path>
      </svg>
    </span>
  );
};

OperatorNoRegex.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OperatorNoRegex.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default OperatorNoRegex;

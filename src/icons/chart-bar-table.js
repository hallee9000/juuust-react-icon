import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartBarTable = props => {
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
          d="M6.392 2.667h1.883v9.6H6.392v-9.6zm4.392 1.946h1.883v7.654h-1.883V4.613zM2 6.559h1.882v5.708H2V6.559zm19 .774a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1v-7h12v-6h7zm-1 6v-4h-4v4h4zm0 6v-4h-4v4h4zm-10 0h4v-4h-4v4zm-6 0h4v-4H4v4z"
        ></path>
      </svg>
    </span>
  );
};

ChartBarTable.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartBarTable.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartBarTable;

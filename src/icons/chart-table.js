import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartTable = props => {
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
        <path d="M22 6a1 1 0 00-1-1H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6zm-2 1v4h-4V7h4zm0 6v4h-4v-4h4zm-6 4h-4v-4h4v4zm-6 0H4v-4h4v4zm-4-6V7h4v4H4zm6-4h4v4h-4V7z"></path>
      </svg>
    </span>
  );
};

ChartTable.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartTable.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartTable;

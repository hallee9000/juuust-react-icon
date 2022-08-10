import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Analysis = props => {
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
        <path d="M13 2.577a2 2 0 00-2 0L4.34 6.423a2 2 0 00-1 1.732v7.69a2 2 0 001 1.732L11 21.423a2 2 0 002 0l6.66-3.846a2 2 0 001-1.732v-7.69a2 2 0 00-1-1.732L13 2.577zM12 4.31l5.692 3.287L12 10.848 6.308 7.596 12 4.309zM5.34 15.845v-6.5L11 12.58v6.533l-5.66-3.268zM13 19.113V12.58l5.66-3.234v6.5L13 19.112z"></path>
      </svg>
    </span>
  );
};

Analysis.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Analysis.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Analysis;

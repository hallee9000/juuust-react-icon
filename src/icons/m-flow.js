import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const MFlow = props => {
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
        <path d="M3 4h3v3H3V4z"></path>
        <path d="M18 4h3v9h-3v-2.405c-1.009.144-1.561.427-1.905.677-.566.412-.915.957-1.6 2.053-.63 1.008-1.534 2.444-3.197 3.522-1.384.898-3.1 1.436-5.298 1.6V20H3V9h3v4.428c1.34-.142 2.103-.468 2.577-.775.65-.421 1.058-.986 1.678-1.978l.125-.2c.562-.909 1.385-2.236 2.775-3.247 1.274-.927 2.847-1.484 4.845-1.664V4z"></path>
        <path d="M18 20v-5h3v5h-3z"></path>
      </svg>
    </span>
  );
};

MFlow.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MFlow.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default MFlow;

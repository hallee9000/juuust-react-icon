import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Debug = props => {
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
        <path d="M13 19.9a5.002 5.002 0 004-4.9v-3a4.981 4.981 0 00-.415-2h-9.17A4.98 4.98 0 007 12v3a5.002 5.002 0 004 4.9V14h2v5.9zm-7.464-2.21A6.979 6.979 0 015 15H2v-2h3v-1c0-.643.087-1.265.249-1.856L3.036 8.866l1-1.732L6.056 8.3c.064-.102.13-.202.199-.3h11.49c.069.098.135.199.199.3l2.02-1.166 1 1.732-2.213 1.278c.162.59.249 1.213.249 1.856v1h3v2h-3a6.961 6.961 0 01-.536 2.69l2.5 1.444-1 1.732-2.526-1.458A6.985 6.985 0 0112 22a6.986 6.986 0 01-5.438-2.592l-2.526 1.458-1-1.732 2.5-1.443v-.001zM8 6a4 4 0 018 0H8z"></path>
      </svg>
    </span>
  );
};

Debug.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Debug.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Debug;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Setting = props => {
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
        <path d="M2 12c0-.865.11-1.703.316-2.504A3 3 0 004.99 4.867a9.99 9.99 0 014.335-2.505 3 3 0 005.348 0 9.99 9.99 0 014.335 2.505 3 3 0 002.675 4.63 10.036 10.036 0 010 5.007 3 3 0 00-2.675 4.629 9.99 9.99 0 01-4.335 2.505 3 3 0 00-5.348 0 9.99 9.99 0 01-4.335-2.505 3 3 0 00-2.675-4.63A10.056 10.056 0 012 12zm4.804 3c.63 1.091.81 2.346.564 3.524.408.29.842.541 1.297.75A4.993 4.993 0 0112 18c1.26 0 2.438.471 3.335 1.274.455-.209.889-.46 1.297-.75A4.993 4.993 0 0117.196 15a4.993 4.993 0 012.77-2.25 8.134 8.134 0 000-1.5A4.993 4.993 0 0117.195 9a4.993 4.993 0 01-.564-3.524 7.988 7.988 0 00-1.297-.75A4.993 4.993 0 0112 6a4.993 4.993 0 01-3.335-1.274 7.99 7.99 0 00-1.297.75A4.993 4.993 0 016.804 9a4.993 4.993 0 01-2.77 2.25 8.125 8.125 0 000 1.5A4.993 4.993 0 016.805 15h-.001zM12 15a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"></path>
      </svg>
    </span>
  );
};

Setting.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Setting.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Setting;

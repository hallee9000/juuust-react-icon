import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const LogoDingdingGray = props => {
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
        <path d="M13.2 7.8c-2.55-.9-6.45-2.7-6.45-2.7-.3 0-.3.15-.3.15 0 1.2.6 2.85.9 3.3.45.3 5.55 1.95 5.55 1.95S9 9.75 7.95 9.45c-.9-.3-.6.3-.6.3.15 1.05 1.05 2.25 1.8 2.4.75.15 3.75 0 3.75 0s-.6 0-1.65.15c-.6.15-1.5.3-1.8.45-.6.15.45 1.05.45 1.05 1.5 1.35 2.25.9 2.25.9.6-.15 1.05-.3 1.5-.45l-.45 2.1h1.5l-.9 3.15 3.6-4.65h-1.8l.45-.6s1.35-2.1 1.8-3.15c.15-.15.15-.3.15-.45.15-1.35-2.1-1.8-4.8-2.85zm-1.05-6.75C5.85 1.05.9 6.15.9 12.3S6 23.55 12.15 23.55c6.3 0 11.25-5.1 11.25-11.25S18.45 1.05 12.15 1.05zm0 21.75c-5.85 0-10.5-4.65-10.5-10.5S6.3 1.8 12.15 1.8s10.5 4.65 10.5 10.5S18 22.8 12.15 22.8z"></path>
      </svg>
    </span>
  );
};

LogoDingdingGray.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoDingdingGray.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default LogoDingdingGray;

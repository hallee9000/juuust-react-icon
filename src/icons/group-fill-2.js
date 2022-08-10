import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const GroupFill2 = props => {
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
        <path d="M16 14.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.78 3.58A6.95 6.95 0 0018 17.5c-.67 0-1.31.1-1.92.28.58.55.92 1.32.92 2.15v.57h5v-.57c0-.81-.48-1.53-1.22-1.85zM6 16.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.92 1.28c-.61-.18-1.25-.28-1.92-.28-.99 0-1.93.21-2.78.58A2.01 2.01 0 002 19.93v.57h5v-.57c0-.83.34-1.6.92-2.15zM10 14.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 015.56 0A2.01 2.01 0 0116 19.93v.57zM15 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6h-8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 015.56 0A2.01 2.01 0 0121 10.43V11zM5 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6H3v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 015.56 0A2.01 2.01 0 0111 10.43V11z"></path>
      </svg>
    </span>
  );
};

GroupFill2.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GroupFill2.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default GroupFill2;

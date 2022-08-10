import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const GroupA2b = props => {
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
        <path d="M9 9a2 2 0 110-4 2 2 0 010 4zm0 2a4 4 0 100-8 4 4 0 000 8zm-4 4h8v4H5v-4zm0-2a2 2 0 00-2 2v5a1 1 0 001 1h10a1 1 0 001-1v-5a2 2 0 00-2-2H5zm16-9v4h-2V4h2zm-2 6v4h2v-4h-2zm2 6v4h-2v-4h2z"></path>
      </svg>
    </span>
  );
};

GroupA2b.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GroupA2b.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default GroupA2b;

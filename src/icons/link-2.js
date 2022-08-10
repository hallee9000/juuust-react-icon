import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Link2 = props => {
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
        <path d="M13.06 8.11l1.415 1.415a7 7 0 010 9.9l-.354.353a7 7 0 01-9.9-9.9l1.415 1.415a5 5 0 107.07 7.071l.355-.354a5 5 0 000-7.07l-1.415-1.415 1.415-1.414-.001-.001zm6.718 6.011l-1.414-1.414a5 5 0 10-7.071-7.071l-.354.354a5 5 0 000 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 010-9.9l.354-.353a7 7 0 019.9 9.9l-.001-.001z"></path>
      </svg>
    </span>
  );
};

Link2.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Link2.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Link2;

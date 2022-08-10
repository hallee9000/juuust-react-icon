import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const EPropertySm = props => {
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
        viewBox="0 0 16 16"
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
        <path d="M4.667 9L3 4l5 1.667-2.642.69L4.668 9z"></path>
        <path d="M12 5H9v1h3V5z"></path>
        <path d="M9 8h3v1H9V8z"></path>
        <path d="M12 12v-1H4v1h8z"></path>
        <path d="M1 3a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm1 0v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1z"></path>
      </svg>
    </span>
  );
};

EPropertySm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EPropertySm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default EPropertySm;

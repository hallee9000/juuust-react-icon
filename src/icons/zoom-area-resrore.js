import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ZoomAreaResrore = props => {
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
        <path d="M3 13v7a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H7v2h12v14H5v-6H3z"></path>
        <path d="M11 1.384L9.588 0 5 4.5 9.588 9 11 7.616 7.823 4.5 11 1.384z"></path>
      </svg>
    </span>
  );
};

ZoomAreaResrore.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ZoomAreaResrore.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ZoomAreaResrore;

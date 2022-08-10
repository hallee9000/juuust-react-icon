import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const More2 = props => {
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
        <path d="M10.5 19.5c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5S12.825 18 12 18s-1.5.675-1.5 1.5zm0-15c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5S12.825 3 12 3s-1.5.675-1.5 1.5zm0 7.5c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5-.675-1.5-1.5-1.5-1.5.675-1.5 1.5z"></path>
      </svg>
    </span>
  );
};

More2.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

More2.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default More2;

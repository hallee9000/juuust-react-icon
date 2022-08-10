import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Split = props => {
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
        <path d="M9.536 13H7.329a3 3 0 110-2h2.207L13 5h3.17a3.001 3.001 0 11.001 2h-2.017l-2.886 4.999L14.155 17h2.016a3.001 3.001 0 110 2H13l-3.464-6zM19 17a1 1 0 100 2 1 1 0 000-2zM4.5 11a1 1 0 100 2 1 1 0 000-2zM19 5a1 1 0 100 2 1 1 0 000-2z"></path>
      </svg>
    </span>
  );
};

Split.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Split.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Split;

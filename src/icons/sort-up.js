import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const SortUp = props => {
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
        <path d="M17 21a1 1 0 102 0V5.828l1.879 1.88a1 1 0 101.414-1.415l-3.574-3.574a.997.997 0 00-1.437 0l-3.575 3.574a1 1 0 001.414 1.414L17 5.828V21z"></path>
        <path d="M15 20a1 1 0 01-1 1H3a1 1 0 110-2h11a1 1 0 011 1z"></path>
        <path d="M9 5a1 1 0 01-1 1H3a1 1 0 010-2h5a1 1 0 011 1z"></path>
        <path d="M12 16a1 1 0 100-2H3a1 1 0 100 2h9z"></path>
        <path d="M11 10a1 1 0 01-1 1H3a1 1 0 110-2h7a1 1 0 011 1z"></path>
      </svg>
    </span>
  );
};

SortUp.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SortUp.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default SortUp;

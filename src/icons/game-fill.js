import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const GameFill = props => {
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
        <path d="M8.364 15.429h7.272l1.082 2.04a1 1 0 00.884.531H21a1 1 0 001-1V9.09a1 1 0 00-.423-.817l-2.954-2.09A1 1 0 0018.046 6H5.954a1 1 0 00-.577.184L2.423 8.273A1 1 0 002 9.089V17a1 1 0 001 1h3.398a1 1 0 00.884-.532l1.082-2.04zM8 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9.5 1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path>
      </svg>
    </span>
  );
};

GameFill.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GameFill.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default GameFill;

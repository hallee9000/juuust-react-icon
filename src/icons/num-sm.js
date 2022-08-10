import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const NumSm = props => {
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
        <path d="M8 11.5h1v-7h-.142L6.5 5.18V6H8v5.5z"></path>
        <path d="M1.354 7.01a1.5 1.5 0 000 2.122l5.656 5.657a1.5 1.5 0 002.122 0l5.657-5.657a1.5 1.5 0 000-2.122L9.132 1.354a1.5 1.5 0 00-2.122 0L1.354 7.01zm.707 1.415a.5.5 0 010-.708l5.657-5.656a.5.5 0 01.707 0l5.656 5.656a.5.5 0 010 .708L8.425 14.08a.5.5 0 01-.707 0L2.06 8.425z"></path>
      </svg>
    </span>
  );
};

NumSm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NumSm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default NumSm;

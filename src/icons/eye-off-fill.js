import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const EyeOffFill = props => {
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
        <path d="M6 0L4.268 1l2.116 3.664a11.01 11.01 0 00-5.203 7.46c.941 5.12 5.427 9 10.82 9 1.24 0 2.435-.205 3.548-.585l2.72 4.71 1.731-1L6 0zm2.842 8.922l1.062 1.84a2.5 2.5 0 002.228 3.858l1.063 1.842a4.502 4.502 0 01-5.693-4.338c0-1.253.512-2.387 1.34-3.202z"></path>
        <path d="M16.498 12.124c0 .553-.1 1.082-.282 1.571l2.82 4.885a10.99 10.99 0 003.783-6.456c-.94-5.12-5.427-9-10.819-9-.614 0-1.216.05-1.802.147l2.55 4.417a4.5 4.5 0 013.75 4.436z"></path>
      </svg>
    </span>
  );
};

EyeOffFill.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeOffFill.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default EyeOffFill;

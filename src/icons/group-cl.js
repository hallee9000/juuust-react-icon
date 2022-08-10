import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const GroupCl = props => {
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
        <g clipPath="url(#clip0_5031_752)">
          <path
            d="M18.008 14a3 3 0 110-6 3 3 0 010 6zm-9-3a4 4 0 110-8.002 4 4 0 010 8.002z"
            fill="#202241"
          ></path>
          <path
            d="M17.609 15c3.407.038 6.188 1.76 6.397 5.4.009.147 0 .6-.542.6h-3.856c0-2.25-.744-4.328-2-6zm-17.6 5.2C.396 15.426 4.268 13 8.99 13c4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H.735c-.25 0-.747-.54-.726-.8z"
            fill="#ACAFBD"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_5031_752">
            <rect width="24" height="24" fill="#fff"></rect>
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

GroupCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GroupCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default GroupCl;

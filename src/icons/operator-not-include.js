import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const OperatorNotInclude = props => {
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
        <g clipPath="url(#clip0_3399_79)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.113 4l2.309-4 1.732 1-1.732 3H20v2h-3.733l-4.041 7H20v2h-8.929l-1.155 2H20v2H8.762l-2.03 3.515-1.732-1L6.452 19H4v-2h3.607l1.181-2.046A5.501 5.501 0 019.5 4h5.613zm-1.155 2H9.5a3.5 3.5 0 000 7h.416l4.042-7z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_3399_79">
            <rect width="24" height="24"></rect>
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

OperatorNotInclude.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OperatorNotInclude.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default OperatorNotInclude;

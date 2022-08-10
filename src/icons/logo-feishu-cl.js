import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const LogoFeishuCl = props => {
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
        <g clipPath="url(#clip0_3342_408)">
          <path
            d="M24 .237l-5.902 6.377a.204.204 0 00-.047.163 1.135 1.135 0 01-.312 1.051 1.146 1.146 0 01-1.649 0l-4.694 4.688.461 6.207L17.136 24 24 .237z"
            fill="#38F"
          ></path>
          <path
            d="M23.925.4l-5.833 6.302a.19.19 0 00-.041.17 1.16 1.16 0 01-.685 1.29 1.14 1.14 0 01-1.255-.252l-4.62 4.62a.082.082 0 000 .074l.455 6.105L23.68.936 23.925.4z"
            fill="#005DE0"
          ></path>
          <path
            d="M23.742 0l-6.376 5.895a.169.169 0 01-.163.047 1.16 1.16 0 00-1.052.32 1.14 1.14 0 000 1.64l-4.7 4.702-6.173-.461L0 6.865 23.742 0z"
            fill="#46EBD5"
          ></path>
          <path
            d="M23.6.068l-6.302 5.84a.19.19 0 01-.17.041 1.14 1.14 0 00-1.024 1.94l-4.613 4.62a.082.082 0 01-.074 0l-6.105-.455L23.064.32 23.6.068z"
            fill="#00D0B6"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_3342_408">
            <rect width="24" height="24" fill="#fff"></rect>
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

LogoFeishuCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoFeishuCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default LogoFeishuCl;

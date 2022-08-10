import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const LogoWechatGray = props => {
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
        <g clipPath="url(#clip0_3342_397)">
          <path d="M9.01 14.475c.45-2.925 1.8-4.65 4.125-5.7.9-.375 2.55-.975 3.9-.6-.375-3.525-4.875-6.075-9-6l-2.025.45C4.51 3 3.385 3.675 2.335 4.5.91 5.625-.59 8.325.235 11.1c.525 1.8 1.725 3.15 3.15 4.05L2.56 17.7l2.925-1.5 1.275.3c.75.225 1.65.225 2.475.15 0-.6-.375-1.35-.225-2.175zm1.5-7.875c.15-.45.6-.525 1.125-.75 1.425.075 1.5 1.95.225 2.1-.825.15-1.65-.525-1.35-1.35zM5.935 8.025c-.825.15-1.65-.6-1.35-1.425.225-.45.6-.525 1.125-.75 1.425.075 1.5 1.875.225 2.175zm17.4 4.2c-1.275-2.175-3.45-3.675-6.9-3.675l-1.425.225c-1.2.3-2.25.75-3.15 1.425-3.15 2.4-2.85 7.05.225 9.3.9.675 3.075 1.725 4.875 1.425.375-.075 2.325-.45 2.4-.45l2.325 1.275-.675-2.1c1.125-1.275 2.25-1.8 2.85-3.75.375-1.275 0-2.775-.525-3.675zm-8.4 1.35c-1.125.45-1.875-.9-.6-1.575 1.125-.075 1.575 1.2.6 1.575zm4.65 0c-1.125.45-1.8-.9-.6-1.575 1.2-.075 1.65 1.2.6 1.575z"></path>
        </g>
        <defs>
          <clipPath id="clip0_3342_397">
            <rect width="24" height="24"></rect>
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

LogoWechatGray.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoWechatGray.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default LogoWechatGray;

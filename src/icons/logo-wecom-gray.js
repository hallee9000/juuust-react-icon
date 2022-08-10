import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const LogoWecomGray = props => {
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
        <path d="M19.125 12.3c.075.3.15.525.225.75.225.525.525.975.9 1.35.15.15.15.3.075.45-.15.15-.3.15-.45 0-.45-.525-1.05-.825-1.725-1.05-.15-.075-.3-.075-.45-.075a1.081 1.081 0 01-.825-.675c-.225-.45-.15-.9.15-1.275.3-.375.75-.525 1.275-.375.45.075.675.45.825.9zm-6.375 4.35c0-.15-.075-.15-.15-.15-1.5.45-3.075.45-4.65 0-.3 0-.6 0-.9.15-.45.3-.975.6-1.5.825-.075 0-.15.075-.225 0-.075-.075 0-.15 0-.225.075-.375.225-.75.3-1.125.15-.375 0-.675-.3-.9-.3-.225-.525-.45-.75-.675-.975-.975-1.5-2.1-1.65-3.525-.075-1.65.525-3.075 1.65-4.2C6 5.4 7.8 4.725 9.75 4.725c1.95-.075 3.75.45 5.325 1.725.975.825 1.65 1.8 2.025 3 .15.525.15 1.05.15 1.575.6-.3 1.05-.225 1.575.225.075-.825 0-1.65-.3-2.4-.675-2.1-2.1-3.6-3.975-4.575-2.1-1.05-4.35-1.35-6.675-.825-2.175.6-4.125 1.8-5.4 3.825-1.2 1.95-1.35 3.975-.525 6.075.45 1.125 1.2 2.025 2.1 2.85.075.075.15.15.15.225-.075.675-.15 1.275-.3 1.95-.075.3 0 .525.225.75.225.225.525.15.75 0 .75-.375 1.575-.75 2.325-1.2.225.075.3 0 .375.075.6.15 1.2.3 1.8.3 1.425.075 2.775-.075 4.125-.525-.45-.225-.75-.6-.75-1.125zm8.625-1.875c-.6-.075-1.2.3-1.275.9-.15.825-.525 1.575-1.2 2.25-.15.15-.15.3 0 .45.15.15.3.075.45-.075.6-.6 1.35-.975 2.175-1.125.525-.075.975-.6.975-1.2-.075-.6-.525-1.125-1.125-1.2zM18.15 18.3c-.675-.15-1.275-.375-1.8-.825l-.375-.375c-.15-.15-.45-.075-.45.15 0 .15.075.225.15.3.6.6.975 1.275 1.125 2.1.075.6.6.975 1.2.975s1.125-.45 1.2-1.125c0-.525-.45-1.05-1.05-1.2zm-2.475-2.1c.15-.75.525-1.35 1.05-1.875.15-.15.15-.3.075-.45-.15-.15-.3-.15-.45 0-.6.6-1.35.975-2.175 1.125-.6.075-.975.6-.975 1.2s.45 1.125 1.05 1.2c.6.075 1.125-.3 1.275-.9.075-.075.075-.225.15-.3z"></path>
      </svg>
    </span>
  );
};

LogoWecomGray.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoWecomGray.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default LogoWecomGray;

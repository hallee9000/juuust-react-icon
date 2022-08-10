import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const LogoDingdingCl = props => {
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
        <path
          d="M12 .375C5.55.375.3 5.625.3 12.075c0 6.45 5.25 11.7 11.7 11.7 6.45 0 11.7-5.25 11.7-11.7 0-6.45-5.25-11.7-11.7-11.7zM17.475 10.5c0 .075-.075.225-.15.45-.525 1.05-1.8 3.15-1.8 3.15l-.375.675h1.8l-3.45 4.5.75-3.15h-1.425l.525-2.1c-.375.075-.9.225-1.425.375 0 0-.75.45-2.175-.825 0 0-.975-.825-.375-1.05.225-.075 1.125-.225 1.875-.3.975-.15 1.575-.225 1.575-.225s-3 .075-3.675-.075c-.675-.075-1.575-1.275-1.8-2.325 0 0-.3-.6.675-.3.975.3 4.8 1.05 4.8 1.05S7.8 8.775 7.425 8.4c-.3-.375-.975-2.025-.9-3.075 0 0 0-.225.3-.15 0 0 3.75 1.725 6.225 2.625 2.475 1.05 4.65 1.5 4.425 2.7z"
          fill="#3AA2EB"
        ></path>
      </svg>
    </span>
  );
};

LogoDingdingCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoDingdingCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default LogoDingdingCl;

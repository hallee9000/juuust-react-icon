import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const UserTagCl = props => {
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
          d="M21.576 1H8.351c-.445 0-.874.174-1.196.482L5.972 2.614c-.194.184-.07.516.194.523l3.332.106c.499.017.975.225 1.327.588 0 0 9.585 9.78 9.602 9.801h1.17c.774 0 1.404-.639 1.404-1.432V2.453C23 1.653 22.364 1 21.576 1z"
          fill="#202241"
        ></path>
        <path
          d="M18.998 13.63l-8.503-8.674a1.746 1.746 0 00-1.183-.523l-6.82-.22C1.66 4.187.98 4.88 1 5.729l.181 6.82c.014.514.218 1.002.577 1.365l8.496 8.666c.55.561 1.438.561 1.984 0l6.76-6.895a1.473 1.473 0 000-2.055zM4.654 9.067c-.617 0-1.117-.509-1.117-1.138 0-.629.5-1.138 1.117-1.138.616 0 1.116.509 1.116 1.138 0 .63-.5 1.138-1.116 1.138z"
          fill="#0A1032"
          fillOpacity=".3"
        ></path>
      </svg>
    </span>
  );
};

UserTagCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UserTagCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default UserTagCl;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Logout = props => {
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
        <path d="M4 4h14v2h2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2v-2h-2v2H4V4z"></path>
        <path d="M17 9.175L18.826 11H9v2h9.832L17 14.831l1.414 1.415 4.243-4.243-4.243-4.243L17 9.175z"></path>
      </svg>
    </span>
  );
};

Logout.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Logout.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Logout;

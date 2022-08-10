import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Recurring = props => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.663 19.849a8.51 8.51 0 01-5.372-1.267A7.749 7.749 0 014.58 15.67l4.082 1.302a1.111 1.111 0 00.676-2.117l-6-1.914a1.111 1.111 0 00-1.45 1.069l.007.62c-.01.083-.009.17.002.255l.05 5.127a1.111 1.111 0 002.222-.022l-.011-1.13a10.174 10.174 0 001.941 1.6 10.732 10.732 0 006.779 1.601c2.383-.23 4.615-1.244 6.305-2.877a9.643 9.643 0 002.777-5.045 1.111 1.111 0 10-2.18-.434 7.42 7.42 0 01-2.142 3.88c-1.317 1.274-3.076 2.08-4.975 2.265zm9.39-15.86a1.111 1.111 0 10-2.222.022l.011 1.13a10.175 10.175 0 00-1.941-1.6 10.732 10.732 0 00-6.779-1.601c-2.383.23-4.615 1.244-6.305 2.877a9.648 9.648 0 00-2.759 4.955 1.111 1.111 0 002.175.456 7.426 7.426 0 012.129-3.813c1.317-1.273 3.076-2.08 4.975-2.264a8.51 8.51 0 015.372 1.266 7.748 7.748 0 012.711 2.914L15.338 7.03a1.111 1.111 0 10-.676 2.117l6 1.914a1.111 1.111 0 001.449-1.069l-.006-.62c.01-.083.008-.17-.002-.255l-.05-5.127z"
        ></path>
      </svg>
    </span>
  );
};

Recurring.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Recurring.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Recurring;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Link = props => {
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
        <path d="M4.222 11.293l2.121-2.121 1.414 1.414-2.121 2.121a4 4 0 005.657 5.657l2.121-2.121 1.414 1.414-2.121 2.121a6 6 0 01-8.485-8.485z"></path>
        <path d="M18.364 11.293l-2.122 2.121 1.415 1.414 2.121-2.12a6 6 0 00-8.485-8.486L9.17 6.343l1.415 1.414 2.121-2.121a4 4 0 115.657 5.657z"></path>
        <path d="M14.121 8.464l-5.657 5.657 1.415 1.415 5.656-5.657-1.414-1.415z"></path>
      </svg>
    </span>
  );
};

Link.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Link.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Link;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Groups = props => {
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
        <path d="M6.5 11.5a4.5 4.5 0 110-9.002 4.5 4.5 0 010 9.002zm.5 10a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm10-10a4.501 4.501 0 01-1.722-8.657A4.5 4.5 0 1117 11.5zm0 10a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM6.5 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm10-10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
      </svg>
    </span>
  );
};

Groups.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Groups.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Groups;

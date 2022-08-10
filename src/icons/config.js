import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Config = props => {
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
        <path d="M6.17 18a3 3 0 015.66 0H22v2H11.83a3 3 0 01-5.66 0H2v-2h4.17zm6-7a3 3 0 015.66 0H22v2h-4.17a3 3 0 01-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 015.66 0H22v2H11.83a3 3 0 01-5.66 0H2V4h4.17zM9 6a1 1 0 100-2 1 1 0 000 2zm6 7a1 1 0 100-2 1 1 0 000 2zm-6 7a1 1 0 100-2 1 1 0 000 2z"></path>
      </svg>
    </span>
  );
};

Config.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Config.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Config;

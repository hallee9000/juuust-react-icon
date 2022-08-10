import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Location = props => {
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
        <path d="M12 16a4 4 0 100-8 4 4 0 000 8z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 1h2v2.055A9.004 9.004 0 0120.945 11H23v2h-2.055A9.004 9.004 0 0113 20.945V23h-2v-2.055A9.004 9.004 0 013.055 13H1v-2h2.055A9.004 9.004 0 0111 3.055V1zM5 12a7 7 0 1014 0 7 7 0 00-14 0z"
        ></path>
      </svg>
    </span>
  );
};

Location.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Location.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Location;

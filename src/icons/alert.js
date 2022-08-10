import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Alert = props => {
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
          d="M10.889 2v3.316h2V2h-2zM17 20v-6.474a5 5 0 10-10 0V20h10zm.862 2H22v-2h-3v-6.474a7 7 0 10-14 0V20H2v2H17.862zm-9.195-3.316v-4.42h2v4.42h-2zM21.023 5.287l-2.357 2.345-1.418-1.41 2.357-2.346 1.418 1.411zM3.11 5.421l2.357 2.345 1.418-1.41L4.53 4.01 3.111 5.42z"
        ></path>
      </svg>
    </span>
  );
};

Alert.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Alert.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Alert;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Result = props => {
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
        <path d="M5 3h6.11l-.25 2H5v14h14v-5.86l2-.25V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.117 3H19a2 2 0 012 2v6.878l-10.152 1.274L12.117 3zm1.766 2H19v5.117l-5.848.731.73-5.848z"
        ></path>
      </svg>
    </span>
  );
};

Result.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Result.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Result;

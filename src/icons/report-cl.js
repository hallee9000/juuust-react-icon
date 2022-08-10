import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ReportCl = props => {
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
          d="M1 3a1 1 0 011-1h20a1 1 0 011 1v2.667H1V3z"
          fill="#1673F6"
        ></path>
        <path
          opacity=".2"
          d="M1 5.667h22v14.5a2 2 0 01-2 2H3a2 2 0 01-2-2v-14.5z"
          fill="#1673F6"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 13.494h-5.076V8.417a5.077 5.077 0 015.077 5.077z"
          fill="#1673F6"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.578 9.263h-.001a5.077 5.077 0 105.077 5.077h-5.076V9.262z"
          fill="#1673F6"
        ></path>
      </svg>
    </span>
  );
};

ReportCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ReportCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ReportCl;

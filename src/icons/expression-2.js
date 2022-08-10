import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Expression2 = props => {
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
        <path d="M13 20H3v-2l3.684-6L3 6V4h10v2H5.34l3.61 6-3.61 6H13v2z"></path>
        <path d="M19.68 9l-1.676 2.667L16.312 9h-2.213l2.401 4-2.5 4h2.23l1.774-2.667L19.787 17H22l-2.5-4 2.41-4h-2.23z"></path>
      </svg>
    </span>
  );
};

Expression2.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Expression2.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Expression2;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartStackn = props => {
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
          d="M20 5v5l-6.3 2-6.3-3L2 10V5l5.4-1 6.3 3L20 5zM2 18v-6.5l5.4-1L13 13v5H2zm14.456 2H15v-8h1.31l4.146 5.51h.094V12H22v8h-1.304l-4.146-5.51h-.094V20z"
        ></path>
      </svg>
    </span>
  );
};

ChartStackn.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartStackn.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartStackn;

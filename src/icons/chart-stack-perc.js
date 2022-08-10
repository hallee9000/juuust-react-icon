import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartStackPerc = props => {
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
          d="M20 5v5l-6.3 2-6.3-3L2 10V5l5.4-1 6.3 3L20 5zM2 18v-6.5l5.4-1L11 12v6H2zm14.091-3.351c0 1.377-.742 2.232-1.958 2.232s-1.969-.855-1.969-2.232v-.006c0-1.377.753-2.227 1.97-2.227 1.215 0 1.957.85 1.957 2.227v.006zm4.75-2.115l-5.202 7.764h-1.43l5.197-7.764h1.436zm-7.386 2.115c0 .812.242 1.253.678 1.253.436 0 .673-.44.673-1.253v-.006c0-.817-.237-1.248-.673-1.248-.436 0-.678.43-.678 1.248v.006zm9.426 3.534c0 1.378-.748 2.233-1.964 2.233s-1.963-.855-1.963-2.233v-.005c0-1.377.747-2.227 1.963-2.227 1.216 0 1.964.85 1.964 2.227v.005zm-2.636 0c0 .818.242 1.254.672 1.254.441 0 .678-.436.678-1.254v-.005c0-.812-.237-1.248-.678-1.248-.43 0-.672.436-.672 1.248v.005z"
        ></path>
      </svg>
    </span>
  );
};

ChartStackPerc.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartStackPerc.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartStackPerc;

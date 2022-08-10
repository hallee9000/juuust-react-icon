import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ListNested = props => {
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
          d="M3 4a1 1 0 102 0 1 1 0 00-2 0zm3-1h15v2H6V3zm4 5h11v2H10V8zm5 5h6v2h-6v-2zm-9 5h15v2H6v-2zm1.076-8.617a1 1 0 111.848-.765 1 1 0 01-1.848.765zM12 14a1 1 0 101.998 0A1 1 0 0012 14zm-8.924 5.383a1 1 0 111.847-.765 1 1 0 01-1.847.765z"
        ></path>
      </svg>
    </span>
  );
};

ListNested.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ListNested.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ListNested;

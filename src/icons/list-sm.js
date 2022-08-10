import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ListSm = props => {
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
        viewBox="0 0 16 16"
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
        <path d="M3 2H2v1h1V2z"></path>
        <path d="M14 2H5v1h9V2z"></path>
        <path d="M2 7h1v1H2V7z"></path>
        <path d="M14 7H5v1h9V7z"></path>
        <path d="M2 12h1v1H2v-1z"></path>
        <path d="M14 12H5v1h9v-1z"></path>
      </svg>
    </span>
  );
};

ListSm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ListSm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ListSm;

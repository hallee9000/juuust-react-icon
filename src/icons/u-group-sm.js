import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const UGroupSm = props => {
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-4 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 9a2 2 0 012-2h3a2 2 0 012 2v2H1V9zm1 1h5V9a1 1 0 00-1-1H3a1 1 0 00-1 1v1z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-1a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 13a2 2 0 012-2h3a2 2 0 012 2v2H8v-2zm1 1h5v-1a1 1 0 00-1-1h-3a1 1 0 00-1 1v1z"
        ></path>
      </svg>
    </span>
  );
};

UGroupSm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGroupSm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default UGroupSm;

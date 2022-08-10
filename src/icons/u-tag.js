import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const UTag = props => {
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
        <path d="M18 18.286l2.992-1.71A2 2 0 0022 14.839V2a1 1 0 00-1-1H9a1 1 0 00-1 1v1h9a1 1 0 011 1v14.286z"></path>
        <path d="M7 11V9h4v2H7z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 5H3a1 1 0 00-1 1v12.84a2 2 0 001.008 1.736l5 2.857a2 2 0 001.984 0l5-2.857A2 2 0 0016 18.839V6a1 1 0 00-1-1zM4 18.84V7h10v11.84l-5 2.857-5-2.858z"
        ></path>
      </svg>
    </span>
  );
};

UTag.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTag.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default UTag;

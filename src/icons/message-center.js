import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const MessageCenter = props => {
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
        <path d="M18 3H6v2h12V3z"></path>
        <path d="M9 13H7v2h2v-2z"></path>
        <path d="M15 13h2v2h-2v-2z"></path>
        <path d="M4 21a1 1 0 01-1-1V8a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4zM5 9v10h14V9H5z"></path>
        <path d="M11 13h2v2h-2v-2z"></path>
      </svg>
    </span>
  );
};

MessageCenter.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MessageCenter.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default MessageCenter;

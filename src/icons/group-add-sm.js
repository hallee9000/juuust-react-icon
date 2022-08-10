import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const GroupAddSm = props => {
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
          d="M7 4.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-4 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
        ></path>
        <path d="M1 10a2 2 0 012-2h3a2 2 0 012 2v3H7v-3a1 1 0 00-1-1H3a1 1 0 00-1 1v3H1v-3z"></path>
        <path d="M13 10h-1V8h-2V7h2V5h1v2h2v1h-2v2z"></path>
      </svg>
    </span>
  );
};

GroupAddSm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GroupAddSm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default GroupAddSm;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Usertag = props => {
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
        <path d="M18.1 2a2 2 0 012 2v11.127a1 1 0 01-.412.809L17 17.89v-2.473l1.1-.8V4h-8v1h-2V4a2 2 0 012-2h8z"></path>
        <path d="M11.5 16a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
        <path d="M16 7.801C16 6.807 15.105 6 14 6H6c-1.105 0-2 .807-2 1.801v10.023c0 .288.153.559.412.728l5 3.276c.35.23.825.23 1.176 0l5-3.276a.876.876 0 00.412-.728V7.8zM6 7.8h8v9.498L10 19.9l-4-2.602V7.8z"></path>
      </svg>
    </span>
  );
};

Usertag.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Usertag.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Usertag;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Application = props => {
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
          d="M5.446 3.166a1.1 1.1 0 011.108 0l2.9 1.691a1.1 1.1 0 01.546.95v3.386a1.1 1.1 0 01-.546.95l-2.9 1.691a1.1 1.1 0 01-1.108 0l-2.9-1.691A1.1 1.1 0 012 9.193V5.807a1.1 1.1 0 01.546-.95l2.9-1.691zM6 5.158L4 6.324v2.352l2 1.166 2-1.166V6.324L6 5.158z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.446 13.166a1.1 1.1 0 011.108 0l2.9 1.691a1.1 1.1 0 01.546.95v3.385a1.1 1.1 0 01-.546.95l-2.9 1.692a1.1 1.1 0 01-1.108 0l-2.9-1.691a1.1 1.1 0 01-.546-.95v-3.386a1.1 1.1 0 01.546-.95l2.9-1.691zM12 15.158l-2 1.166v2.352l2 1.166 2-1.166v-2.352l-2-1.166z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.554 3.166a1.1 1.1 0 00-1.108 0l-2.9 1.691a1.1 1.1 0 00-.546.95v3.386c0 .39.208.753.546.95l2.9 1.691c.342.2.766.2 1.108 0l2.9-1.691a1.1 1.1 0 00.546-.95V5.807a1.1 1.1 0 00-.546-.95l-2.9-1.691zM16 6.324l2-1.166 2 1.166v2.352l-2 1.166-2-1.166V6.324z"
        ></path>
      </svg>
    </span>
  );
};

Application.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Application.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Application;

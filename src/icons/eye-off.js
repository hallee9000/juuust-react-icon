import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const EyeOff = props => {
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
        <path d="M17.882 19.297A10.949 10.949 0 0112 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 013.34-6.066L1.392 2.808l1.415-1.415 19.8 19.8-1.416 1.414-3.31-3.31h.001zM5.935 7.35A8.965 8.965 0 003.223 12a9.005 9.005 0 0013.201 5.838l-2.028-2.028A4.5 4.5 0 018.19 9.604L5.935 7.35zm6.98 6.978l-3.243-3.242a2.5 2.5 0 003.241 3.241l.001.001zm7.892 2.264l-1.43-1.43a8.938 8.938 0 001.4-3.162A9.006 9.006 0 009.552 5.338L7.974 3.76A10.99 10.99 0 0112 3c5.392 0 9.878 3.88 10.82 9a10.949 10.949 0 01-2.013 4.592zm-9.084-9.084a4.5 4.5 0 014.77 4.769l-4.77-4.769z"></path>
      </svg>
    </span>
  );
};

EyeOff.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeOff.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default EyeOff;

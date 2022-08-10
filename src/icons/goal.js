import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Goal = props => {
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
          d="M12 2c5.52 0 10 4.48 10 10 0 5.51-4.48 10-10 10-5.51 0-10-4.49-10-10C2 6.48 6.49 2 12 2zm4.88 6.27a.95.95 0 00-.35-.73.907.907 0 00-.78-.19l-.31.06c-.21.03-.5.06-.83.09-.69.05-1.4.04-1.87-.12-.71-.24-1.37-.38-2.05-.38-.68 0-1.33.14-2.05.38-.38.13-.64.49-.64.89v9.16c0 .28.23.5.5.5.28 0 .5-.22.5-.5v-2.86c.37-.03.74-.14 1.11-.17.6-.05 1.36-.05 2.1.14 1.42.36 2.95.54 4.16-.07.31-.17.51-.49.51-.84V8.27z"
        ></path>
      </svg>
    </span>
  );
};

Goal.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Goal.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Goal;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const EyeOnFill = props => {
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
        <path d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
        <path d="M12 3c5.392 0 9.878 3.88 10.82 9-.94 5.12-5.428 9-10.82 9s-9.878-3.88-10.819-9c.94-5.12 5.427-9 10.82-9zm4.498 9a4.498 4.498 0 10-8.996 0 4.498 4.498 0 008.996 0z"></path>
      </svg>
    </span>
  );
};

EyeOnFill.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeOnFill.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default EyeOnFill;

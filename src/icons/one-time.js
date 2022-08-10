import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const OneTime = props => {
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
        <path d="M16.913 13.57l-5.447 4.935-3.88-3.88L9 13.211l2.534 2.534 4.036-3.657 1.343 1.482z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 2v2h8V2h2v2h1.2C20.77 4 22 5.298 22 6.846v12.308C22 20.702 20.77 22 19.2 22H4.8C3.23 22 2 20.702 2 19.154V6.846C2 5.298 3.23 4 4.8 4H6V2h2zm8 4v1h2V6h1.2c.418 0 .8.355.8.846V9H4V6.846C4 6.355 4.382 6 4.8 6H6v1h2V6h8zM4 11v8.154c0 .491.382.846.8.846h14.4c.418 0 .8-.355.8-.846V11H4z"
        ></path>
      </svg>
    </span>
  );
};

OneTime.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OneTime.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default OneTime;

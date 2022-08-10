import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Parameter = props => {
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
          d="M9.47 13.935V19H7V5h5.44c1.588 0 2.848.413 3.779 1.24.937.827 1.406 1.92 1.406 3.281 0 1.394-.459 2.478-1.377 3.252-.911.775-2.19 1.162-3.838 1.162H9.47zm0-1.982h2.97c.878 0 1.549-.205 2.011-.615.462-.417.694-1.016.694-1.797 0-.768-.235-1.38-.704-1.836-.468-.462-1.113-.7-1.933-.713H9.47v4.961z"
        ></path>
        <path d="M4 3v2H3v14h1v2H1V3h3z"></path>
        <path d="M20 3h3v18h-3v-2h1V5h-1V3z"></path>
      </svg>
    </span>
  );
};

Parameter.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Parameter.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Parameter;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Mfa = props => {
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
        <path d="M10.991 1.416L4.066 5.264c-1.362.757-1.374 2.712-.021 3.485l14.461 8.264-6.501 3.824L7.277 18H8v-2H3v5h2v-2.034l5.976 3.586a2 2 0 002.043.009l6.501-3.825c1.325-.779 1.313-2.698-.021-3.46L5.037 7.012l6.926-3.847L16.373 6H15v2h5V3h-2v1.668l-4.956-3.186a2 2 0 00-2.053-.066z"></path>
      </svg>
    </span>
  );
};

Mfa.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Mfa.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Mfa;

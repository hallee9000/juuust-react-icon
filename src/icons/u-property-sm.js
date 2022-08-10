import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const UPropertySm = props => {
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
        <path d="M8.272 5.25A2.745 2.745 0 015.532 8a2.745 2.745 0 01-2.74-2.75 2.745 2.745 0 012.74-2.75 2.745 2.745 0 012.74 2.75zm-1.023 0a1.72 1.72 0 00-1.717-1.723A1.72 1.72 0 003.815 5.25a1.72 1.72 0 001.717 1.723A1.72 1.72 0 007.249 5.25z"></path>
        <path d="M1.391 11.37c0-1.138.92-2.06 2.053-2.06h4.007c1.133 0 2.052.922 2.052 2.06v2.13H1.391v-2.13zm2.053-1.03c-.567 0-1.026.461-1.026 1.03v1.1h6.059v-1.1c0-.569-.46-1.03-1.026-1.03H3.444z"></path>
        <path d="M14.392 3.78h-4.106V2.75h4.106v1.03z"></path>
        <path d="M10.286 6.976h4.106v-1.03h-4.106v1.03z"></path>
      </svg>
    </span>
  );
};

UPropertySm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPropertySm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default UPropertySm;

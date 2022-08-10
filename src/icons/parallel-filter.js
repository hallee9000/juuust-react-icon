import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ParallelFilter = props => {
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
          d="M14 13v6l-4 2v-8L4 4V2h16v2l-6 9zM6.404 4L12 12.394 17.596 4H6.404zM17 15h5l-1 2h-5l1-2zm4 4h-5l-1 2h5l1-2zM4 15h5l-1 2H3l1-2zm4 4H3l-1 2h5l1-2z"
        ></path>
      </svg>
    </span>
  );
};

ParallelFilter.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ParallelFilter.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ParallelFilter;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Project = props => {
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
        <path d="M20.083 15.2l1.202.721a.5.5 0 010 .858l-8.77 5.262a1 1 0 01-1.03 0l-8.77-5.262a.5.5 0 010-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 010 .858L12 17.65l-9.285-5.571a.5.5 0 010-.858l1.202-.721L12 15.35l8.083-4.85zm-7.57-9.191l8.772 5.262a.5.5 0 010 .858L12 13 2.715 7.429a.5.5 0 010-.858l8.77-5.262a1 1 0 011.03 0h-.001zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"></path>
      </svg>
    </span>
  );
};

Project.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Project.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Project;

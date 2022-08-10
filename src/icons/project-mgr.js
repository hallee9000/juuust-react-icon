import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ProjectMgr = props => {
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
        <path d="M7 1a1 1 0 00-1 1v1h15v15h1a1 1 0 001-1V2a1 1 0 00-1-1H7z"></path>
        <path d="M6 11V9h4v2H6z"></path>
        <path d="M3 5a1 1 0 00-1 1v15a1 1 0 001 1h15a1 1 0 001-1V6a1 1 0 00-1-1H3zm1 2h13v13H4V7z"></path>
      </svg>
    </span>
  );
};

ProjectMgr.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProjectMgr.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ProjectMgr;

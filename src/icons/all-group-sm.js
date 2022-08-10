import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const AllGroupSm = props => {
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
        <path d="M1 7V1h6v6H1zm1-5v4h4V2H2z"></path>
        <path d="M9 7V1h6v6H9zm1-5v4h4V2h-4z"></path>
        <path d="M1 9v6h6V9H1zm5 1v4H2v-4h4z"></path>
        <path d="M9 15V9h6v6H9zm1-5v4h4v-4h-4z"></path>
      </svg>
    </span>
  );
};

AllGroupSm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AllGroupSm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default AllGroupSm;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const IndicatorSm = props => {
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
        <path d="M3.796 11.15a.3.3 0 01-.11-.41l1.85-3.204a.5.5 0 01.683-.183l2.598 1.5 1.375-2.382L8.75 5.64l3-.866.75 3.03-1.442-.832-1.625 2.815a.5.5 0 01-.683.183l-2.598-1.5-1.6 2.771a.3.3 0 01-.41.11l-.346-.2z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 1a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2H3zM2 13V3a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1z"
        ></path>
      </svg>
    </span>
  );
};

IndicatorSm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IndicatorSm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default IndicatorSm;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const RelatedProp = props => {
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
        <path d="M9 15H4a1 1 0 01-1-1V4a1 1 0 011-1h10a1 1 0 011 1v5h5a1 1 0 011 1v10a1 1 0 01-1 1H10a1 1 0 01-1-1v-5zm-4-2h4v-3a1 1 0 011-1h3V5H5v8zm10-2v3a1 1 0 01-1 1h-3v4h8v-8h-4zm-2 0h-2v2h2v-2z"></path>
      </svg>
    </span>
  );
};

RelatedProp.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RelatedProp.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default RelatedProp;

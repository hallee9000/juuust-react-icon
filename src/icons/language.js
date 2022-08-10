import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Language = props => {
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
        <path d="M2 12C2 6.48 6.47 2 11.99 2 17.52 2 22 6.48 22 12s-4.48 10-10.01 10C6.47 22 2 17.52 2 12zm13.97-4h2.95a8.03 8.03 0 00-4.33-3.56c.6 1.11 1.06 2.31 1.38 3.56zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM4 12c0 .69.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2 0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2zm1.08 4a7.987 7.987 0 004.33 3.56A15.65 15.65 0 018.03 16H5.08zm0-8h2.95c.32-1.25.78-2.45 1.38-3.56-1.84.63-3.37 1.9-4.33 3.56zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zM9.66 14h4.68c.09-.66.16-1.32.16-2 0-.68-.07-1.35-.16-2H9.66c-.09.65-.16 1.32-.16 2 0 .68.07 1.34.16 2zm4.93 5.56A8.03 8.03 0 0018.92 16h-2.95a15.65 15.65 0 01-1.38 3.56zM16.5 12c0 .68-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2h-3.38c.08.66.14 1.32.14 2z"></path>
      </svg>
    </span>
  );
};

Language.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Language.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Language;

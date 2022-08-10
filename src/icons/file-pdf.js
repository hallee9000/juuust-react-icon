import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const FilePdf = props => {
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
        <path d="M5 3v17h16V10h-2V3H5zm15-2a1 1 0 011 1v19a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1h16zM7.999 15.001h2V13.01c0-.01 0-.01-.009-.01H8V15zM7 18v-6h2.99c.559 0 1.01.444 1.01 1.01v1.98A1.004 1.004 0 0110 16H7.999v2H7zm10 0v-6h3.998v1h-3l-.013 1.985 2.015.013v1h-2.001v2h-1V18zm-4-1h1a.993.993 0 00.999-.998v-2.004A1.002 1.002 0 0014 13h-1v4zm-1 1v-6h2c1.104 0 2 .899 2 1.998v2.004A1.994 1.994 0 0114 18h-2z"></path>
      </svg>
    </span>
  );
};

FilePdf.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FilePdf.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default FilePdf;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const AssetConvert = props => {
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
          d="M5.636 18.364H2.91a.91.91 0 01-.909-.91V2.91A.91.91 0 012.91 2h14.544a.91.91 0 01.91.91v2.726h2.727a.91.91 0 01.909.91V21.09a.91.91 0 01-.91.909H6.546a.91.91 0 01-.909-.91v-2.726zm-1.818-1.819V3.819h12.728v1.818h-10a.91.91 0 00-.91.91v10H3.818zm4.546-9.09a.91.91 0 00-.91.909v11.818h12.728V7.455H8.364z"
        ></path>
        <path d="M11 10v4H9l4 4v-8h-2z"></path>
        <path d="M17 18v-4h2l-4-4v8h2z"></path>
      </svg>
    </span>
  );
};

AssetConvert.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AssetConvert.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default AssetConvert;

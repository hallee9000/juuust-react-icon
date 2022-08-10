import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ViewOriginal = props => {
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
        <g clipPath="url(#clip0_3240_50)">
          <path d="M23.907 16.677l-.002-.003-.003-.003c-1.182-2.5-3.012-3.786-5.448-3.786-2.435 0-4.267 1.288-5.45 3.786v.003a1.149 1.149 0 000 .976c1.183 2.497 3.013 3.784 5.45 3.784 2.436 0 4.266-1.29 5.451-3.787a1.148 1.148 0 00.004-.97h-.002zm-5.454 3.042c-1.664 0-2.877-.805-3.78-2.56.9-1.756 2.116-2.559 3.781-2.559 1.664 0 2.878.803 3.78 2.56-.896 1.752-2.114 2.559-3.778 2.559h-.003zm-1.486-2.546a1.5 1.5 0 103.001 0 1.5 1.5 0 00-3 0zM2.931 4.496H20.8v6.78h1.93V3.424a.858.858 0 00-.858-.858H1.86a.858.858 0 00-.857.858V17.36a.858.858 0 00.857.858h8.434v-1.93H2.931V4.496zM17.715 7.34l-.986-.987a.215.215 0 00-.304 0L11.5 11.285l-2.305-2.31a.214.214 0 00-.304 0L5.022 12.84a.214.214 0 000 .301l.986.987a.215.215 0 00.302 0L9.038 11.4l2.308 2.31a.213.213 0 00.304 0l6.065-6.071a.211.211 0 000-.302v.002z"></path>
        </g>
        <defs>
          <clipPath id="clip0_3240_50">
            <rect width="24" height="24"></rect>
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

ViewOriginal.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ViewOriginal.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ViewOriginal;

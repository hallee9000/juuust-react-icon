import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const SortZ2a = props => {
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
          d="M6.736 2L10 10H8.611l-.795-2.062H4.172L3.377 10H2l3.264-8h1.472zm.688 4.93l-1.4-3.62h-.048L4.564 6.93h2.86zm7.697.777a1 1 0 11-1.414-1.414l3.574-3.574.012-.012a.997.997 0 011.414 0l.012.012 3.574 3.574a1 1 0 01-1.414 1.414L19 5.828V21a1 1 0 11-2 0V5.828l-1.879 1.88zM9.213 13H2.859v1.172h4.667L2.5 20.916V22h7v-1.172H4.2l5.013-6.731V13z"
        ></path>
      </svg>
    </span>
  );
};

SortZ2a.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SortZ2a.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default SortZ2a;

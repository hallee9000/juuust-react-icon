import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartLineTable = props => {
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
        <path d="M14.755 5.18a1.09 1.09 0 10-.994-.643l-2.58 3.187a1.085 1.085 0 00-.586.134L8.408 6.315c-.16.339-.42.62-.746.807l2.37 1.674v.016a1.09 1.09 0 102.066-.487l2.55-3.15c.035.003.071.005.107.005z"></path>
        <path d="M6.763 6.996a1.453 1.453 0 100-2.906 1.453 1.453 0 000 2.906z"></path>
        <path d="M4.22 10.629a1.09 1.09 0 11-.982-1.085l2.218-2.739c.258.267.597.455.977.525L4.124 10.18c.062.137.096.288.096.448z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.735 7.076c.544 0 .986.441.986.986v11.832a.986.986 0 01-.986.986H2.986A.986.986 0 012 19.894v-6.902h11.832V7.076h6.903zm-.986 5.916V9.048h-3.945v3.944h3.944zm0 5.916v-3.944h-3.945v3.944h3.944zm-9.86 0h3.943v-3.944H9.888v3.944zm-5.917 0h3.944v-3.944H3.972v3.944z"
        ></path>
      </svg>
    </span>
  );
};

ChartLineTable.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartLineTable.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartLineTable;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const TdLogo = props => {
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
        <path d="M5.71 1.5h1.383v1.423H5.71V1.5z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.837 3.245h2.155v1.846c.597-.179 4.373-1.182 6.838 1.252 0 0 1.671 1.472 1.46 3.753 0 0 0 .16.082.257.081.098 1.659 2.06 1.659 2.06s.318.271.188.455-1.059.527-1.059.527-.392.241-.04.658c.32.377.261.434.102.586a2.73 2.73 0 00-.054.052c-.196.197-.188.295-.047.426l.066.058c.115.099.204.175.1.314a.903.903 0 01-.098.105c-.113.111-.228.222-.147.524.035.13.096.265.158.402.124.277.252.562.178.825-.112.392-.642.797-1.41.919-.77.123-2.127.393-1.891 1.79 0 0 .177.81.87 1.019 0 0-4.086 2.375-8.73-.536 0 0 1.176-.801.988-2.395-.189-1.595-1.6-2.65-1.6-2.65s-2.024-.875-1.648-5.486v-.002H4.639V8.266h1.688v1.2h1.537V7.825H6.268v-2.22h2.155v1.72h1.707V5.361h-.138v.104H7.837v-2.22zm4.647 5.682h-1.851V6.965h1.85v1.962zM9.813 12.03H7.961v-1.962h1.852v1.962z"
        ></path>
        <path d="M4.303 4.423h1.688v1.738H4.303V4.423z"></path>
        <path d="M3.302 8.975H2.25V7.888h1.052v1.087z"></path>
      </svg>
    </span>
  );
};

TdLogo.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TdLogo.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default TdLogo;

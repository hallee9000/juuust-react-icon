import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const LogoCurrencylayerCl = props => {
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
        <rect width="24" height="24" fill="#fff"></rect>
        <path
          d="M1.18 1.627c.052-.03.12-.034.206-.059.182-.053 1.03-.068 4.13-.068 2.146 0 3.93.015 3.966.04.036.023.05.082.031.136-.013.053-.544.62-1.175 1.259-.626.639-1.143 1.175-1.143 1.195 0 .015.172.18.385.366 2.673 2.317 4.683 5.982 5.713 10.417.45 1.922.658 3.591.713 5.61.022.86.018 1.026-.046 1.187a1.374 1.374 0 01-.63.673c-.227.112-.282.117-1.212.117-.921 0-.99-.005-1.202-.112a1.404 1.404 0 01-.627-.62c-.072-.146-.1-.307-.108-.659-.091-2.77-.386-4.742-1.017-6.82-.971-3.182-2.482-5.612-4.315-6.924l-.445-.317-1.452 1.527c-.799.844-1.502 1.556-1.566 1.595-.131.073-.263.02-.34-.136-.032-.059-.045-1.474-.045-4.138 0-3.645-.023-4.153.179-4.269zm13.534.097c-.037-.048-.05-.122-.037-.16.023-.06.545-.069 4.062-.06l4.038.015.105.113.104.112.009 4.108c.012 3.898.014 4.285-.132 4.352-.016.008-.034.011-.054.015-.059.015-.508-.44-1.566-1.571l-1.483-1.59-.268.175c-1.938 1.244-3.644 4.016-4.624 7.49l-.154.556-.046-.195a50.782 50.782 0 01-.19-.806c-.281-1.205-.822-2.83-1.38-4.132a7.038 7.038 0 01-.254-.644c0-.122.65-1.279 1.08-1.923a15.808 15.808 0 012.582-2.927c.282-.244.508-.459.504-.473a93.604 93.604 0 00-1.126-1.196c-.612-.644-1.139-1.21-1.17-1.259z"
          fill="#2E70E0"
        ></path>
      </svg>
    </span>
  );
};

LogoCurrencylayerCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoCurrencylayerCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default LogoCurrencylayerCl;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Expand = props => {
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
        <path d="M13.27 3.963a.915.915 0 00.943.933h.734l3.096-.198-2.441 2.333-2.808 2.78a.899.899 0 00-.278.675c0 .291.09.53.268.715.178.192.413.288.704.288a.875.875 0 00.378-.08.915.915 0 00.317-.208l2.808-2.8 2.312-2.442-.188 3.117v.745c0 .278.086.506.258.685a.878.878 0 00.674.278.91.91 0 00.685-.278A.928.928 0 0021 9.82V4.618c0-.516-.142-.916-.427-1.201-.284-.278-.678-.417-1.18-.417h-5.18c-.265 0-.49.09-.675.268a.962.962 0 00-.268.695zM3 14.169v5.213c0 .516.142.913.427 1.191.278.285.671.427 1.18.427h5.17a.898.898 0 00.675-.278.91.91 0 00.278-.685.916.916 0 00-.953-.943h-.734l-3.096.208 2.441-2.333 2.808-2.79a.853.853 0 00.288-.665c0-.291-.093-.533-.278-.725-.178-.185-.413-.278-.704-.278-.133 0-.258.024-.377.07a.912.912 0 00-.318.208L7.01 15.6l-2.322 2.442.188-3.117v-.755a.97.97 0 00-.258-.685.882.882 0 00-.664-.268.927.927 0 00-.685.268.95.95 0 00-.268.685z"></path>
      </svg>
    </span>
  );
};

Expand.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Expand.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Expand;

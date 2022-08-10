import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Approve = props => {
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
          d="M6 17v3h12v-3h2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3h2z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.975 4.02c0-1.116.901-2.02 2.013-2.02h6.04c1.112 0 2.014.904 2.014 2.02v.847c0 .63-.293 1.223-.791 1.605l-1.276.978.045 3.94 5.16 1.897a2.692 2.692 0 011.82 2.55v1.142c0 1.116-.901 2.02-2.013 2.02L4.013 19A2.017 2.017 0 012 16.98v-1.143c0-1.153.732-2.18 1.82-2.55l5.168-1.894V7.446l-1.245-.983a2.022 2.022 0 01-.768-1.587V4.02zm8.053 0h-6.04v.856l1.245.983c.485.383.769.968.769 1.587v3.947a2.02 2.02 0 01-1.323 1.897l-5.193 1.904-.014.004a.673.673 0 00-.459.64v1.142h15.974v-1.144a.672.672 0 00-.46-.638l-.014-.005-5.186-1.906a2.02 2.02 0 01-1.32-1.873l-.045-3.94a2.022 2.022 0 01.79-1.628l1.276-.979V4.02z"
        ></path>
      </svg>
    </span>
  );
};

Approve.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Approve.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Approve;

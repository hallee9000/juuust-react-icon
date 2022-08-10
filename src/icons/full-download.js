import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const FullDownload = props => {
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
          d="M12.768 17.049l4.422-4.294a1.021 1.021 0 00.018-1.444 1.08 1.08 0 00-1.488 0l-2.658 2.58V4.437a.992.992 0 00-.306-.722 1.09 1.09 0 00-.744-.298c-.576 0-1.05.46-1.05 1.02v9.454l-2.658-2.58a1.08 1.08 0 00-1.488 0 1.003 1.003 0 000 1.444l4.422 4.293.024.024a1.035 1.035 0 00.636.291l.102.006c.036 0 .072 0 .108-.006a.165.165 0 00.027-.003 1.054 1.054 0 00.633-.312zm8.76 3.902v-4.095a.909.909 0 00-.258-.623.917.917 0 00-.636-.256c-.492 0-.9.39-.9.873v3.28H4.272v-3.28a.864.864 0 00-.264-.617.917.917 0 00-.636-.256c-.492 0-.9.39-.9.873v4.096c0 .058 0 .104.012.157.048.437.432.78.894.78h17.238a.9.9 0 00.882-.704.907.907 0 00.03-.227z"
        ></path>
      </svg>
    </span>
  );
};

FullDownload.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FullDownload.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default FullDownload;

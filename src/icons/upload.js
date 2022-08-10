import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Upload = props => {
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
        <path d="M6.808 7.614L11.23 3.32c.005-.008.012-.013.018-.017l.006-.006c.162-.157.372-.256.582-.285.01 0 .018-.002.027-.003a.17.17 0 01.027-.003C11.926 3 11.962 3 11.998 3l.102.006a.17.17 0 01.027.003l.027.003c.216.029.42.128.582.285l4.446 4.317a1.003 1.003 0 010 1.444 1.08 1.08 0 01-1.488 0l-2.658-2.58v9.454c0 .56-.474 1.02-1.05 1.02a1.09 1.09 0 01-.744-.298.992.992 0 01-.306-.722V6.478l-2.658 2.58a1.08 1.08 0 01-1.488 0 1.022 1.022 0 01.018-1.444z"></path>
        <path d="M21.528 16.856v4.095a.906.906 0 01-.03.228.9.9 0 01-.882.705H3.378a.893.893 0 01-.894-.781c-.012-.053-.012-.1-.012-.157V16.85c0-.483.408-.873.9-.873.246 0 .474.099.636.256a.864.864 0 01.264.617v3.28h15.462v-3.28c0-.483.408-.873.9-.873.246 0 .474.099.636.256a.909.909 0 01.258.623z"></path>
      </svg>
    </span>
  );
};

Upload.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Upload.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Upload;

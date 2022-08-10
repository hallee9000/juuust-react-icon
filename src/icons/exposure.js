import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Exposure = props => {
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
        <path d="M12 18a6 6 0 110-12 6 6 0 010 12zm0-2A4 4 0 1012 8 4 4 0 0012 16zM11 1h2v3h-2V1zm0 19.001h2v3h-2v-3zM3.513 4.929L4.93 3.516 7.05 5.637 5.635 7.05l-2.12-2.12V4.93zM16.95 18.364l1.415-1.414 2.12 2.121-1.414 1.414-2.121-2.12zm2.121-14.85l1.414 1.415-2.12 2.121-1.415-1.413 2.121-2.121v-.002zM5.635 16.95l1.415 1.415-2.121 2.12-1.415-1.414 2.121-2.121zM23 11.001v2h-3v-2h3zM4 11.001v2H1v-2h3z"></path>
      </svg>
    </span>
  );
};

Exposure.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Exposure.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Exposure;

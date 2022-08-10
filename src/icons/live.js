import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Live = props => {
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
        <path d="M12 13l6 9H6l6-9zm0 3.6L9.74 20h4.52L12 16.6zm-1.06-6.04a1.5 1.5 0 111.978-2.258 1.5 1.5 0 01-1.978 2.258zM5.281 2.783l1.415 1.415a7.5 7.5 0 000 10.606l-1.415 1.415a9.5 9.5 0 010-13.436zm13.436 0a9.5 9.5 0 010 13.436l-1.415-1.415a7.5 7.5 0 000-10.606l1.415-1.415zM8.11 5.611l1.414 1.414a3.5 3.5 0 000 4.95L8.11 13.389a5.5 5.5 0 010-7.778zm7.778 0a5.5 5.5 0 010 7.778l-1.414-1.414a3.5 3.5 0 000-4.95l1.414-1.414z"></path>
      </svg>
    </span>
  );
};

Live.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Live.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Live;

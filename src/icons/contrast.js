import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Contrast = props => {
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
        <path d="M3 4.885l3.693 14.23h1.534l3.712-14.23h-1.666L7.47 16.362 4.667 4.885H3z"></path>
        <path d="M16.682 4.5c-1.098 0-2.008.358-2.69 1.073-.738.716-1.098 1.652-1.098 2.863 0 1.21.36 2.119 1.117 2.78.455.44 1.27.853 2.425 1.266 1.06.385 1.761.688 2.083.908.606.44.928 1.046.928 1.844 0 1.596-.89 2.422-2.633 2.422-.833 0-1.458-.22-1.874-.66-.417-.496-.701-1.294-.815-2.423h-1.477c.227 3.276 1.629 4.927 4.204 4.927 2.765 0 4.148-1.486 4.148-4.404 0-1.238-.398-2.201-1.174-2.917-.512-.468-1.345-.908-2.52-1.321-.984-.386-1.666-.688-2.026-.936-.568-.413-.833-.936-.833-1.541 0-.633.208-1.129.625-1.487.379-.385.91-.55 1.591-.55.776 0 1.383.22 1.8.66.378.386.624 1.046.757 1.927h1.477C20.432 5.96 19.107 4.5 16.682 4.5z"></path>
      </svg>
    </span>
  );
};

Contrast.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Contrast.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Contrast;

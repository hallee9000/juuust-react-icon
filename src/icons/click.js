import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Click = props => {
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
        <path d="M10.5 1a.84.84 0 01.589.24.816.816 0 01.244.582V4.56a.816.816 0 01-.244.581.84.84 0 01-1.179 0 .816.816 0 01-.244-.58V1.82c0-.217.088-.426.244-.58A.84.84 0 0110.5 1zM5.189 3.158a.84.84 0 011.178 0L8.31 5.075a.822.822 0 01.265.587.811.811 0 01-.244.595.834.834 0 01-.604.24.843.843 0 01-.595-.26L5.19 4.318a.816.816 0 010-1.16zm10.622 0a.816.816 0 010 1.161l-1.945 1.917a.831.831 0 01-.595.262.844.844 0 01-.604-.24.821.821 0 01-.244-.596.813.813 0 01.265-.587l1.945-1.917a.84.84 0 011.178 0zM3 8.394c0-.217.088-.426.244-.58a.84.84 0 01.59-.241H6.61a.84.84 0 01.59.24.816.816 0 010 1.162.84.84 0 01-.59.241H3.833a.84.84 0 01-.589-.24A.816.816 0 013 8.393zm9.085-.289c-.95-.804-2.419-.138-2.419 1.097v12.35c0 1.326 1.661 1.952 2.558.964l2.904-3.202a1.709 1.709 0 011.197-.555l4.266-.17c1.33-.052 1.906-1.685.895-2.54l-9.4-7.944zm-.752 12.928v-11.4l8.68 7.336-3.756.147c-.45.018-.891.125-1.298.315-.407.189-.772.457-1.072.788l-2.554 2.814z"></path>
      </svg>
    </span>
  );
};

Click.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Click.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Click;

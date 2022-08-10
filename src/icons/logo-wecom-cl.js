import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const LogoWecomCl = props => {
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
          d="M15.606 17.54a.32.32 0 00.04.488 4.107 4.107 0 011.265 2.466 1.338 1.338 0 101.429-1.682 4.102 4.102 0 01-2.282-1.272.32.32 0 00-.452 0z"
          fill="#FB6500"
        ></path>
        <path
          d="M21.034 15.422c-.217.216-.352.5-.384.805a4.103 4.103 0 01-1.27 2.285.32.32 0 10.489.409 4.103 4.103 0 012.466-1.265 1.336 1.336 0 10-1.297-2.234h-.004z"
          fill="#0082EF"
        ></path>
        <path
          d="M17.267 11.652a1.337 1.337 0 00.805 2.273c.88.163 1.682.608 2.285 1.27a.32.32 0 10.408-.49 4.107 4.107 0 01-1.264-2.465 1.338 1.338 0 00-2.234-.588z"
          fill="#2DBC00"
        ></path>
        <path
          d="M16.61 13.741l-.023.024a4.1 4.1 0 01-2.502 1.31 1.33 1.33 0 00-.592 2.233 1.337 1.337 0 002.273-.805c.164-.88.611-1.683 1.273-2.286a.32.32 0 10-.428-.476z"
          fill="#FC0"
        ></path>
        <path
          d="M8.534 2.202c-2.398.264-4.571 1.288-6.132 2.89A8.097 8.097 0 00.905 7.197a7.333 7.333 0 00.516 7.405c.424.64 1.12 1.44 1.757 2.009l-.288 2.265-.032.097c-.008.028-.008.06-.012.088l-.008.072.008.072a.728.728 0 001.097.564h.012l.044-.032.688-.344L6.74 18.36c.976.28 1.987.42 3.002.412a10.764 10.764 0 003.683-.64 1.333 1.333 0 01-.909-1.397 9.043 9.043 0 01-3.786.376l-.204-.028a9.153 9.153 0 01-1.361-.284.93.93 0 00-.729.076l-.056.028-1.689.993-.072.044c-.04.024-.06.032-.08.032a.116.116 0 01-.108-.12l.064-.26.076-.284.12-.469.14-.52a.708.708 0 00-.256-.789 7.384 7.384 0 01-1.705-1.777 5.776 5.776 0 01-.416-5.836 6.672 6.672 0 011.2-1.68C4.935 4.914 6.736 4.074 8.73 3.858a9.454 9.454 0 012.073 0c1.981.228 3.775 1.08 5.047 2.393.493.509.893 1.081 1.19 1.69.396.808.596 1.664.596 2.541 0 .092-.008.184-.012.272a1.333 1.333 0 011.64.192l.06.072a7.293 7.293 0 00-.728-3.794 8.171 8.171 0 00-1.48-2.105 10.046 10.046 0 00-6.109-2.91 11.259 11.259 0 00-2.473-.008z"
          fill="#0082EF"
        ></path>
      </svg>
    </span>
  );
};

LogoWecomCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoWecomCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default LogoWecomCl;

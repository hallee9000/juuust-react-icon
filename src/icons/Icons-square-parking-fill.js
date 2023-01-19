import React from 'react';
import PropTypes from 'prop-types';

const IconsSquareParkingFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 14h-3v3H8V7h5c1.758 0 3 1.615 3 3.5 0 1.902-1.309 3.5-3 3.5zm-3-2V9h3c.345 0 1 .385 1 1.5 0 1.098-.691 1.5-1 1.5h-3z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 21V3h18v18H3zM5 5h14v14H5V5z"
      ></path>
    </svg>
  );
};

IconsSquareParkingFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsSquareParkingFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsSquareParkingFill;

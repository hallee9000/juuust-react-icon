import React from 'react';
import PropTypes from 'prop-types';

const IconsLaptopFill = props => {
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
        d="M21 5H3v13H1v1a2 2 0 002 2h18a2 2 0 002-2v-1h-2V5zM5 17V7h14v10H5z"
      ></path>
    </svg>
  );
};

IconsLaptopFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsLaptopFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsLaptopFill;

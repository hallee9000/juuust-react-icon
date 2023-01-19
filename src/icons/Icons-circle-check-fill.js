import React from 'react';
import PropTypes from 'prop-types';

const IconsCircleCheckFill = props => {
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
      <path d="M11.067 16.482l6.342-7.61-1.537-1.28-4.939 5.927L8 10.586 6.586 12l4.481 4.482z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
      ></path>
    </svg>
  );
};

IconsCircleCheckFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsCircleCheckFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsCircleCheckFill;

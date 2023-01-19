import React from 'react';
import PropTypes from 'prop-types';

const IconsFashionForwardFill = props => {
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
        d="M3 19V5l9 7-9 7zm5.742-7L5 14.91V9.09L8.742 12z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 19V5l9 7-9 7zm5.742-7L15 14.91V9.09L18.742 12z"
      ></path>
    </svg>
  );
};

IconsFashionForwardFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsFashionForwardFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsFashionForwardFill;

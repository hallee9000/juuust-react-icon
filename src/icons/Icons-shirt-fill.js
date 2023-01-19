import React from 'react';
import PropTypes from 'prop-types';

const IconsShirtFill = props => {
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
        d="M23 3H1v5.5l4 3V22h14V11.5l4-3V3zM3 7.5V5h5a4 4 0 108 0h5v2.5l-4 3V20H7v-9.5l-4-3zM14 5h-4a2 2 0 104 0z"
      ></path>
    </svg>
  );
};

IconsShirtFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsShirtFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsShirtFill;

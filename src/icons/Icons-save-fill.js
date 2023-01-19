import React from 'react';
import PropTypes from 'prop-types';

const IconsSaveFill = props => {
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
        d="M3 3h13.48L21 8.65V21H3V3zm6 16h6v-5H9v5zm8 0v-7H7v7H5V5h2v4h9V5.6l3 3.75V19h-2zM9 5h5v2H9V5z"
      ></path>
    </svg>
  );
};

IconsSaveFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsSaveFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsSaveFill;

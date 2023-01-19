import React from 'react';
import PropTypes from 'prop-types';

const IconsBomPantFrontFill = props => {
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
        d="M7 1h10v2.697l2 3V23H5V6.697l2-3V1zm2 2v1.303l-2 3V21h4v-9h2v9h4V7.303l-2-3V3h-2v4l-2 2V3H9z"
      ></path>
    </svg>
  );
};

IconsBomPantFrontFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomPantFrontFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomPantFrontFill;

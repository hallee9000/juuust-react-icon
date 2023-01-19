import React from 'react';
import PropTypes from 'prop-types';

const IconsBomPantBackFill = props => {
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
      <path d="M15 8H9v2h6V8z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1h10v2.697l2 3V23H5V6.697l2-3V1zm2 2v1.303l-2 3V21h4v-9h2v9h4V7.303l-2-3V3H9z"
      ></path>
    </svg>
  );
};

IconsBomPantBackFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomPantBackFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomPantBackFill;

import React from 'react';
import PropTypes from 'prop-types';

const IconsBomPocketFill = props => {
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
        d="M19 5H5v11.7l7 3.111 7-3.11V5zm2 13l-9 4-9-4V3h18v15z"
      ></path>
    </svg>
  );
};

IconsBomPocketFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomPocketFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomPocketFill;

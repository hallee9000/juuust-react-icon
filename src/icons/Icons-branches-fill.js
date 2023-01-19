import React from 'react';
import PropTypes from 'prop-types';

const IconsBranchesFill = props => {
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
        d="M19 8.83a3.001 3.001 0 10-2 0V11H7V8.83a3.001 3.001 0 10-2 0v6.34a3.001 3.001 0 102 0V13h12V8.83zM18 7a1 1 0 100-2 1 1 0 000 2zM6 19a1 1 0 100-2 1 1 0 000 2zM7 6a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
    </svg>
  );
};

IconsBranchesFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBranchesFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBranchesFill;

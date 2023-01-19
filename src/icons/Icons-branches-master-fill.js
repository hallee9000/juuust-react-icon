import React from 'react';
import PropTypes from 'prop-types';

const IconsBranchesMasterFill = props => {
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
        d="M13 6a1 1 0 11-2 0 1 1 0 012 0zm0 2.83a3.001 3.001 0 10-2 0V12H3v3.17a3.001 3.001 0 102 0V14h6v1.17a3.001 3.001 0 102 0V14h6v1.17a3.001 3.001 0 102 0V12h-8V8.83zM4 19a1 1 0 100-2 1 1 0 000 2zm9-1a1 1 0 11-2 0 1 1 0 012 0zm7 1a1 1 0 100-2 1 1 0 000 2z"
      ></path>
    </svg>
  );
};

IconsBranchesMasterFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBranchesMasterFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBranchesMasterFill;

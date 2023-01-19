import React from 'react';
import PropTypes from 'prop-types';

const IconsBomPocketFlapFill = props => {
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
        d="M3 11H2V3h20v8h-1v7l-9 4-9-4v-7zm1-6h16v4H4V5zm1 6v5.7l7 3.111 7-3.11V11H5z"
      ></path>
    </svg>
  );
};

IconsBomPocketFlapFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomPocketFlapFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomPocketFlapFill;

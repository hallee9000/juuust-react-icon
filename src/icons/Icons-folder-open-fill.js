import React from 'react';
import PropTypes from 'prop-types';

const IconsFolderOpenFill = props => {
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
        d="M7.414 2H0v18h20.82l2.4-12H21V4H9.414l-2-2zM19 8V6H8.586l-2-2H2v12.875L4.219 8H19zM3.78 18l2-8h15l-1.6 8H3.78z"
      ></path>
    </svg>
  );
};

IconsFolderOpenFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsFolderOpenFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsFolderOpenFill;

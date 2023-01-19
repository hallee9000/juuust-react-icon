import React from 'react';
import PropTypes from 'prop-types';

const IconsSearchFill = props => {
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
        d="M11 3a8 8 0 104.906 14.32L20 21.414 21.414 20l-4.094-4.094A8 8 0 0011 3zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z"
      ></path>
    </svg>
  );
};

IconsSearchFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsSearchFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsSearchFill;

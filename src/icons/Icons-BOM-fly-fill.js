import React from 'react';
import PropTypes from 'prop-types';

const IconsBomFlyFill = props => {
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
        d="M18.757 10h-3.964v8.656L13.15 20H9.793V10h-4.55L3 11.414V21H1V10.586l3-2.09V4h16v4.497l3 2.089V21h-2v-9.586L18.757 10zM5.777 6h12.445v2H5.778V6zm6.016 4h1v7.708l-.357.292h-.643v-8z"
      ></path>
    </svg>
  );
};

IconsBomFlyFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomFlyFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomFlyFill;

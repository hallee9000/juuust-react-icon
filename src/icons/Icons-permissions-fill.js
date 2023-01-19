import React from 'react';
import PropTypes from 'prop-types';

const IconsPermissionsFill = props => {
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
        d="M13.401 12.665a5 5 0 10-6.803 0A9.008 9.008 0 001 21v1h18v-1a9.008 9.008 0 00-5.599-8.335zM10 12a3 3 0 100-6 3 3 0 000 6zm0 2a7.001 7.001 0 016.93 6H3.07A7.002 7.002 0 0110 14z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 13l-3.5 2-3.5-2V7h7v6zm-2-4h-3v2.84l1.5.857 1.5-.858V9z"
      ></path>
    </svg>
  );
};

IconsPermissionsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsPermissionsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsPermissionsFill;

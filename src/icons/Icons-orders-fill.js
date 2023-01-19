import React from 'react';
import PropTypes from 'prop-types';

const IconsOrdersFill = props => {
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
      <path d="M12 9H8v2h4V9z"></path>
      <path d="M16 13v2H8v-2h8z"></path>
      <path d="M16 18v-2H8v2h8z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2v1H4v19h16V3h-3V2H7zm8 2H9v1h6V4zM6 5h1v2h10V5h1v15H6V5z"
      ></path>
    </svg>
  );
};

IconsOrdersFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsOrdersFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsOrdersFill;

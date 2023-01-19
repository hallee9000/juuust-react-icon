import React from 'react';
import PropTypes from 'prop-types';

const IconsTrashFill = props => {
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
        d="M8 2h8v3h5v2h-2v14H5V7H3V5h5V2zM7 7v12h10V7H7zm7-3v1h-4V4h4z"
      ></path>
    </svg>
  );
};

IconsTrashFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsTrashFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsTrashFill;

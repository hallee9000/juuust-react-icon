import React from 'react';
import PropTypes from 'prop-types';

const IconsCopyFill = props => {
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
        d="M5 16V4h10v12H5zm-2 2V2h14v4h4v16H7v-4H3zm6 0v2h10V8h-2v10H9z"
      ></path>
    </svg>
  );
};

IconsCopyFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsCopyFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsCopyFill;

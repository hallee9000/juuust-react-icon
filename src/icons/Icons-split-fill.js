import React from 'react';
import PropTypes from 'prop-types';

const IconsSplitFill = props => {
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
        d="M13 6h5.437l-1.185 1.336 1.496 1.327L21.997 5l-3.249-3.664-1.496 1.327L18.437 4H11v7H2v2h9v7h7.437l-1.185 1.336 1.496 1.327L21.997 19l-3.249-3.664-1.496 1.327L18.437 18H13V6z"
      ></path>
    </svg>
  );
};

IconsSplitFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsSplitFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsSplitFill;

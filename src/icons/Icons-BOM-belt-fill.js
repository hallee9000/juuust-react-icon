import React from 'react';
import PropTypes from 'prop-types';

const IconsBomBeltFill = props => {
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
        d="M17 16v2H7v-2H1V8h6V6h10v2h6v8h-6zm-2-8H9v8h6V8zm2 2v4h4v-4h-4zM7 10v4H3v-4h4z"
      ></path>
    </svg>
  );
};

IconsBomBeltFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomBeltFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomBeltFill;

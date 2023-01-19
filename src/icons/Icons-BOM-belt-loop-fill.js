import React from 'react';
import PropTypes from 'prop-types';

const IconsBomBeltLoopFill = props => {
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
        d="M9.5 5v3H1v8h8.5v3h5v-3H23V8h-8.5V5h-5zm3 2h-1v10h1V7zm2 3v4H21v-4h-6.5zM3 10h6.5v4H3v-4z"
      ></path>
    </svg>
  );
};

IconsBomBeltLoopFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomBeltLoopFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomBeltLoopFill;

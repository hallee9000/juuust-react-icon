import React from 'react';
import PropTypes from 'prop-types';

const IconsBomNeckLoopFill = props => {
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
        d="M19.316 7h-14v6.414L2 15.05l.632 1.898L6.48 15h11.675L22 16.949l.633-1.898-3.317-1.637V7zm-2 6V9h-10v4h10z"
      ></path>
    </svg>
  );
};

IconsBomNeckLoopFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomNeckLoopFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomNeckLoopFill;

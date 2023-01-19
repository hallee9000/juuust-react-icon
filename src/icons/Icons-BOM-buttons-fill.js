import React from 'react';
import PropTypes from 'prop-types';

const IconsBomButtonsFill = props => {
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
      <path d="M11 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
      <path d="M14.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path d="M16 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
      <path d="M9.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
      ></path>
    </svg>
  );
};

IconsBomButtonsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomButtonsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomButtonsFill;

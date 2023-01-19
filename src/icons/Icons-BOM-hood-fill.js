import React from 'react';
import PropTypes from 'prop-types';

const IconsBomHoodFill = props => {
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
        d="M17.72 1h-7.134L6 5.586v9.178L2.382 22H17.72L20 15.162V7.838L17.72 1zm-5.252 19L8 14.638V6.414L11.414 3h4.865l.077.23L12 7.586v7.65l4.342 4.577-.063.187h-3.81zm-2.603 0H5.618l1.593-3.185L9.865 20zM14 14.439V8.414L17 5.5 18 8v7l-1 2.5-3-3.061z"
      ></path>
    </svg>
  );
};

IconsBomHoodFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomHoodFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomHoodFill;

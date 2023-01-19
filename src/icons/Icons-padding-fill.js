import React from 'react';
import PropTypes from 'prop-types';

const IconsPaddingFill = props => {
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
        d="M8.09 7L12 3.264 15.91 7 12 10.737 8.09 7zm-.276 2.5L5.198 7 12 .5 18.802 7l-2.616 2.5 2.616 2.5-2.616 2.5 2.616 2.5L12 23.5 5.198 17l2.616-2.5L5.198 12l2.616-2.5zM8.09 17l1.17-1.118L12 18.5l2.74-2.618L15.91 17 12 20.736 8.09 17z"
      ></path>
    </svg>
  );
};

IconsPaddingFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsPaddingFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsPaddingFill;

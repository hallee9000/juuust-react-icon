import React from 'react';
import PropTypes from 'prop-types';

const IconsShellFill = props => {
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
        d="M12 .5L5.198 7l2.616 2.5-1.17 1.118L5.198 12l1.446 1.382 1.17 1.118L5.198 17 12 23.5l6.802-6.5-2.616-2.5 1.17-1.118L18.802 12l-1.446-1.382-1.17-1.118L18.802 7 12 .5zM9.26 10.882L12 13.5l2.74-2.618L15.91 12 12 15.736 8.09 12l1.17-1.118zM8.09 17l1.17-1.118 1.294 1.236L12 18.5l1.446-1.382 1.294-1.236L15.91 17 12 20.736 8.09 17z"
      ></path>
    </svg>
  );
};

IconsShellFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsShellFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsShellFill;

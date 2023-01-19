import React from 'react';
import PropTypes from 'prop-types';

const IconsLiningFill = props => {
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
        d="M8.09 7L12 3.264 15.91 7 12 10.737 8.09 7zM5.198 7l1.446-1.382 3.91-3.736L12 .5l1.446 1.382 3.91 3.736L18.802 7l-1.446 1.382-1.17 1.118 2.616 2.5L12 18.5 5.198 12l2.616-2.5-1.17-1.118L5.198 7zm4.062 3.882L8.09 12 12 15.736 15.91 12l-1.17-1.118-1.294 1.236L12 13.5l-1.446-1.382-1.294-1.236zM7.814 14.5L5.198 17 12 23.5l6.802-6.5-2.616-2.5-4.186 4-4.186-4z"
      ></path>
    </svg>
  );
};

IconsLiningFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsLiningFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsLiningFill;

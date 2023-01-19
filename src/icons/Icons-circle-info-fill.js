import React from 'react';
import PropTypes from 'prop-types';

const IconsCircleInfoFill = props => {
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
      <path d="M10 10h3v5h1v2h-4v-2h1v-3h-1v-2z"></path>
      <path d="M13 7h-2v2h2V7z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
      ></path>
    </svg>
  );
};

IconsCircleInfoFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsCircleInfoFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsCircleInfoFill;

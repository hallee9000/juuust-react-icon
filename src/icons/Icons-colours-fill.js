import React from 'react';
import PropTypes from 'prop-types';

const IconsColoursFill = props => {
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
      <path d="M10 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
      <path d="M7.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path d="M13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
      <path d="M16.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.5C2 6.701 6.701 2 12.5 2S23 6.701 23 12.5l-1 1c-.894 0-2.213.175-3.526.56-1.328.389-2.531.957-3.29 1.67-.63.59-1.073 1.603-1.345 2.834-.266 1.204-.339 2.477-.339 3.436l-1 1C6.701 23 2 18.299 2 12.5zM12.5 4a8.5 8.5 0 00-.974 16.945c.043-.86.146-1.844.36-2.813.303-1.37.86-2.858 1.93-3.861 1.088-1.021 2.635-1.703 4.095-2.13 1.048-.307 2.112-.501 3.037-.588A8.501 8.501 0 0012.5 4z"
      ></path>
    </svg>
  );
};

IconsColoursFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsColoursFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsColoursFill;

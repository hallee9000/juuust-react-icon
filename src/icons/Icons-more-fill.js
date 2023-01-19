import React from 'react';
import PropTypes from 'prop-types';

const IconsMoreFill = props => {
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
      <path d="M18 10.5h3v3h-3v-3z"></path>
      <path d="M10.5 10.5h3v3h-3v-3z"></path>
      <path d="M3 10.5h3v3H3v-3z"></path>
    </svg>
  );
};

IconsMoreFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsMoreFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsMoreFill;

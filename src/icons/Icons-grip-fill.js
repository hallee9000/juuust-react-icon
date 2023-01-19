import React from 'react';
import PropTypes from 'prop-types';

const IconsGripFill = props => {
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
      <path d="M10 4H8v16h2V4z"></path>
      <path d="M16 4h-2v16h2V4z"></path>
    </svg>
  );
};

IconsGripFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsGripFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsGripFill;

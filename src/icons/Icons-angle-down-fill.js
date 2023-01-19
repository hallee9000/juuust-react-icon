import React from 'react';
import PropTypes from 'prop-types';

const IconsAngleDownFill = props => {
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
        d="M8 8.586l4 4 4-4L17.414 10 12 15.414 6.586 10 8 8.586z"
      ></path>
    </svg>
  );
};

IconsAngleDownFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsAngleDownFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsAngleDownFill;

import React from 'react';
import PropTypes from 'prop-types';

const IconsAngleUpFill = props => {
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
        d="M12 8.586L17.414 14 16 15.414l-4-4-4 4L6.586 14 12 8.586z"
      ></path>
    </svg>
  );
};

IconsAngleUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsAngleUpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsAngleUpFill;

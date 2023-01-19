import React from 'react';
import PropTypes from 'prop-types';

const IconsAngleRightFill = props => {
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
        d="M10 6.586L15.414 12 10 17.414 8.586 16l4-4-4-4L10 6.586z"
      ></path>
    </svg>
  );
};

IconsAngleRightFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsAngleRightFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsAngleRightFill;

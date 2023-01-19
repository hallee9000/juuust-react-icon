import React from 'react';
import PropTypes from 'prop-types';

const IconsAngleLeftFill = props => {
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
        d="M15.414 8l-4 4 4 4L14 17.414 8.586 12 14 6.586 15.414 8z"
      ></path>
    </svg>
  );
};

IconsAngleLeftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsAngleLeftFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsAngleLeftFill;

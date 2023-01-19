import React from 'react';
import PropTypes from 'prop-types';

const IconsCheckFill = props => {
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
        d="M21.414 7L10 18.414 3.586 12 5 10.586l5 5 10-10L21.414 7z"
      ></path>
    </svg>
  );
};

IconsCheckFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsCheckFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsCheckFill;

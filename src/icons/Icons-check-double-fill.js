import React from 'react';
import PropTypes from 'prop-types';

const IconsCheckDoubleFill = props => {
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
        d="M11.121 14.707L18.828 7l-1.414-1.414-7.707 7.707L7 10.586 5.586 12l2.707 2.707-.879.879-5-5L1 12l6.414 6.414 2.293-2.293L12 18.414 23.414 7 22 5.586l-10 10-.879-.879z"
      ></path>
    </svg>
  );
};

IconsCheckDoubleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsCheckDoubleFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsCheckDoubleFill;

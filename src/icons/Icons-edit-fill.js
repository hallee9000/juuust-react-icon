import React from 'react';
import PropTypes from 'prop-types';

const IconsEditFill = props => {
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
        d="M3 19v-4L16 2l4 4L7 19H3zm2-3.172l11-11L17.172 6l-11 11H5v-1.172z"
      ></path>
      <path d="M3 20h18v2H3v-2z"></path>
    </svg>
  );
};

IconsEditFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsEditFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsEditFill;

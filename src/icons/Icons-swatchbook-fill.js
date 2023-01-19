import React from 'react';
import PropTypes from 'prop-types';

const IconsSwatchbookFill = props => {
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
      <path d="M13.294 5.707L14 5h0l-.706.707zM9.599 18.499L8.731 20H7a3 3 0 002.6-1.5z"></path>
    </svg>
  );
};

IconsSwatchbookFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsSwatchbookFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsSwatchbookFill;

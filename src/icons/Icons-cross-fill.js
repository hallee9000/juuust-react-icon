import React from 'react';
import PropTypes from 'prop-types';

const IconsCrossFill = props => {
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
      <path d="M12 10.586l-6-6L4.586 6l6 6-6 6L6 19.414l6-6 6 6L19.414 18l-6-6 6-6L18 4.586l-6 6z"></path>
    </svg>
  );
};

IconsCrossFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsCrossFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsCrossFill;

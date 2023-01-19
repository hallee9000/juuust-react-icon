import React from 'react';
import PropTypes from 'prop-types';

const IconsMinusFill = props => {
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
      <rect x="4" y="11" width="16" height="2"></rect>
    </svg>
  );
};

IconsMinusFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsMinusFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsMinusFill;

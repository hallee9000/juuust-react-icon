import React from 'react';
import PropTypes from 'prop-types';

const IconsMinifyFill = props => {
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
      <path d="M2 3h2v18H2V3z"></path>
      <path d="M9.829 11H22v2H9.828l4 4-1.414 1.414L6 12l6.414-6.414L13.828 7l-4 4z"></path>
    </svg>
  );
};

IconsMinifyFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsMinifyFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsMinifyFill;

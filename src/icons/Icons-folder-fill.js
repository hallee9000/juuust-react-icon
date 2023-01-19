import React from 'react';
import PropTypes from 'prop-types';

const IconsFolderFill = props => {
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
      <path d="M8 4H2v16h20V6H10L8 4z"></path>
    </svg>
  );
};

IconsFolderFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsFolderFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsFolderFill;

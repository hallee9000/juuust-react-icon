import React from 'react';
import PropTypes from 'prop-types';

const IconsArrowLeftFill = props => {
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
      <path d="M6.829 11H21v2H6.828l4 4-1.414 1.414L3 12l6.414-6.414L10.828 7l-4 4z"></path>
    </svg>
  );
};

IconsArrowLeftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsArrowLeftFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsArrowLeftFill;

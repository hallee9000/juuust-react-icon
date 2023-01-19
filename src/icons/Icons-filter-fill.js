import React from 'react';
import PropTypes from 'prop-types';

const IconsFilterFill = props => {
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
      <path d="M2 5h20v2H2V5z"></path>
      <path d="M5 11h14v2H5v-2z"></path>
      <path d="M15 17H9v2h6v-2z"></path>
    </svg>
  );
};

IconsFilterFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsFilterFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsFilterFill;

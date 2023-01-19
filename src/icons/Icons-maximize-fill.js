import React from 'react';
import PropTypes from 'prop-types';

const IconsMaximizeFill = props => {
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
      <path d="M22 3h-2v18h2V3z"></path>
      <path d="M11.584 5.586L17.998 12l-6.414 6.414L10.17 17l4-4H2v-2h12.17l-4-4 1.414-1.414z"></path>
    </svg>
  );
};

IconsMaximizeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsMaximizeFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsMaximizeFill;

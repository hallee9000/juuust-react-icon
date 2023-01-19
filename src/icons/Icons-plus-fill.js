import React from 'react';
import PropTypes from 'prop-types';

const IconsPlusFill = props => {
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
      <path d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2h-7z"></path>
    </svg>
  );
};

IconsPlusFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsPlusFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsPlusFill;

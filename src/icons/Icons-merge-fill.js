import React from 'react';
import PropTypes from 'prop-types';

const IconsMergeFill = props => {
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
        d="M9 6H2V4h9v7h7.434l-1.182-1.333 1.496-1.327 3.249 3.663-3.249 3.664-1.496-1.327L18.44 13H11v7H2v-2h7V6z"
      ></path>
    </svg>
  );
};

IconsMergeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsMergeFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsMergeFill;

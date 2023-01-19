import React from 'react';
import PropTypes from 'prop-types';

const IconsBomPantWaistbandFill = props => {
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
        d="M4 4v2.667l-3 4V20h2v-8.667L5.5 8h13l2.5 3.333V20h2v-9.333l-3-4V4H4z"
      ></path>
      <path d="M13 15h-2v5h2v-5z"></path>
    </svg>
  );
};

IconsBomPantWaistbandFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomPantWaistbandFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomPantWaistbandFill;

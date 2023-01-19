import React from 'react';
import PropTypes from 'prop-types';

const IconsBomLegsFill = props => {
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
        d="M16.535 2h-9.07L5 5.697V22h14V5.697L16.535 2zM7 6.303L8.535 4h6.93L17 6.303V20h-4V9h-2v11H7V6.303z"
      ></path>
    </svg>
  );
};

IconsBomLegsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomLegsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomLegsFill;

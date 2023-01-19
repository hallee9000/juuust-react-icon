import React from 'react';
import PropTypes from 'prop-types';

const IconsBomHemFill = props => {
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
        d="M3 4H1v12.414L4.586 20H23V4h-2v11H3V4zm1.414 13l1 1H21v-1H4.414z"
      ></path>
    </svg>
  );
};

IconsBomHemFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomHemFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomHemFill;

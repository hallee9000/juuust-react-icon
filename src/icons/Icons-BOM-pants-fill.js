import React from 'react';
import PropTypes from 'prop-types';

const IconsBomPantsFill = props => {
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
        d="M7 1h10v2.697l2 3V23H5V6.697l2-3V1zm3.199 3.303H9l-2 3V21h4v-9h2v9h4V7.303l-2-3h-2v3.03L11 9V4.303h-.801z"
      ></path>
    </svg>
  );
};

IconsBomPantsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomPantsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomPantsFill;

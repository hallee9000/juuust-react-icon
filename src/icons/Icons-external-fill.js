import React from 'react';
import PropTypes from 'prop-types';

const IconsExternalFill = props => {
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
      <path d="M15 10.415l-7 7L6.586 16l7-7H9V7h8v8h-2v-4.585z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3h18v18H3V3zm2 2v14h14V5H5z"
      ></path>
    </svg>
  );
};

IconsExternalFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsExternalFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsExternalFill;

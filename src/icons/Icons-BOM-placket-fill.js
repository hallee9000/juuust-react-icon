import React from 'react';
import PropTypes from 'prop-types';

const IconsBomPlacketFill = props => {
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
        d="M17.303 2H6.697l-3.14 2.094-2.873.957.632 1.898 2.607-.87L8 8.12V24h2V9.118l2 1 8.077-4.038 2.607.869.632-1.898-2.872-.957L17.303 2zm.709 2.876L16.697 4H7.303l-1.315.876L12 7.882l6.012-3.006z"
      ></path>
      <path d="M16 8.118l-2 1V24h2V8.118z"></path>
    </svg>
  );
};

IconsBomPlacketFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomPlacketFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomPlacketFill;

import React from 'react';
import PropTypes from 'prop-types';

const IconsBomCuffFill = props => {
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
        d="M20 21v-4.667l3-4V3h-2v8.667L18.5 15h-13L3 11.667V3H1v9.333l3 4V21h16zm-2-4H6v2h12v-2z"
      ></path>
    </svg>
  );
};

IconsBomCuffFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomCuffFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomCuffFill;

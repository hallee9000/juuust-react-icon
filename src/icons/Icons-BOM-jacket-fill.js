import React from 'react';
import PropTypes from 'prop-types';

const IconsBomJacketFill = props => {
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
        d="M15 2H9v1H0v4.566l5 3V22h14V10.566l5-3V3h-9V2zm-4 3H2v1.434l5 3V16h4V5zM7 18v2h10v-2H7zm10-2h-4V5h9v1.434l-5 3V16z"
      ></path>
    </svg>
  );
};

IconsBomJacketFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomJacketFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomJacketFill;

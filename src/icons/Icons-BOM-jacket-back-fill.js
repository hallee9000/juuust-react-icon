import React from 'react';
import PropTypes from 'prop-types';

const IconsBomJacketBackFill = props => {
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
        d="M9.877 3h4.246l5.09 1.272L18 9.123V22H6V9.123l-1.213-4.85L9.877 3zm.246 2l-2.91.728L8 8.877V20h8V8.877l.787-3.15L13.877 5h-3.754z"
      ></path>
    </svg>
  );
};

IconsBomJacketBackFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomJacketBackFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomJacketBackFill;

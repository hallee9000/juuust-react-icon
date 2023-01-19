import React from 'react';
import PropTypes from 'prop-types';

const IconsBomJacketFrontFill = props => {
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
        d="M14.123 3H9.877l-5.09 1.272L6 9.123V22h12V9.123l1.212-4.85L14.122 3zm-6.91 2.728L10.122 5H11v15H8V8.877l-.788-3.15zM13 20h3V8.877l.787-3.15L13.877 5H13v15z"
      ></path>
    </svg>
  );
};

IconsBomJacketFrontFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomJacketFrontFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomJacketFrontFill;

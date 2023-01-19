import React from 'react';
import PropTypes from 'prop-types';

const IconsNotificationsFill = props => {
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
        d="M13 2h-2v2.083A6.002 6.002 0 006 10v7H4v2h16v-2h-2v-7a6.002 6.002 0 00-5-5.917V2zm-5 8a4 4 0 118 0v7H8v-7z"
      ></path>
      <path d="M9 20h6v2H9v-2z"></path>
    </svg>
  );
};

IconsNotificationsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsNotificationsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsNotificationsFill;

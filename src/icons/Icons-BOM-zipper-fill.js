import React from 'react';
import PropTypes from 'prop-types';

const IconsBomZipperFill = props => {
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
        d="M12 1l3 2.25V4h2v2h-2v2h2v2h-2v2h2v2H7v-2h2v-2H7V8h2V6H7V4h2v-.75L12 1zm1 3.25l-1-.75-1 .75V11h2V4.25z"
      ></path>
      <path d="M17 18v-2H7v2h10z"></path>
      <path d="M17 22v-2H7v2h10z"></path>
    </svg>
  );
};

IconsBomZipperFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomZipperFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomZipperFill;

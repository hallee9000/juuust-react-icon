import React from 'react';
import PropTypes from 'prop-types';

const IconsWarningFill = props => {
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
      <path d="M11 10h2v6h-2v-6z"></path>
      <path d="M11 19v-2h2v2h-2z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2l11 20H1L12 2zm7.617 18H4.383L12 6.15 19.617 20z"
      ></path>
    </svg>
  );
};

IconsWarningFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsWarningFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsWarningFill;

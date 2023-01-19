import React from 'react';
import PropTypes from 'prop-types';

const IconsFolderPlusFill = props => {
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
      <path d="M11 8h2v3h3v2h-3v3h-2v-3H8v-2h3V8z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2h7.414l2 2H23v16H1V2zm2 2v14h18V6H9.586l-2-2H3z"
      ></path>
    </svg>
  );
};

IconsFolderPlusFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsFolderPlusFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsFolderPlusFill;

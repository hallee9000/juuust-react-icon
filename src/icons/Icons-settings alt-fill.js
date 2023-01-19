import React from 'react';
import PropTypes from 'prop-types';

const IconsSettingsAltFill = props => {
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
        d="M8 2H6v5H4v2h2v13h2V9h2V7H8V2zm10 0h-2v14h-2v2h2v4h2v-4h2v-2h-2V2z"
      ></path>
    </svg>
  );
};

IconsSettingsAltFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsSettingsAltFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsSettingsAltFill;

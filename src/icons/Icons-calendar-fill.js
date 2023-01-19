import React from 'react';
import PropTypes from 'prop-types';

const IconsCalendarFill = props => {
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
      <path d="M10 11v3H7v-3h3z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2h2v1h6V2h2v1h4v18H3V3h4V2zm8 3v1h2V5h2v2H5V5h2v1h2V5h6zM5 9v10h14V9H5z"
      ></path>
    </svg>
  );
};

IconsCalendarFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsCalendarFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsCalendarFill;

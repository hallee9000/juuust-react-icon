import React from 'react';
import PropTypes from 'prop-types';

const IconsBomPanelFill = props => {
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
        d="M10 3L6 4v18h12V4l-4-1h-4zm2 2v15h4V5.562L13.754 5H12z"
      ></path>
    </svg>
  );
};

IconsBomPanelFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomPanelFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomPanelFill;

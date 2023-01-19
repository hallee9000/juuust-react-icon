import React from 'react';
import PropTypes from 'prop-types';

const IconsCommentFill = props => {
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
      <path d="M21 4v16l-5-4H3V4h18z"></path>
    </svg>
  );
};

IconsCommentFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsCommentFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsCommentFill;

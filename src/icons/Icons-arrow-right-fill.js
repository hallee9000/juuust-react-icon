import React from 'react';
import PropTypes from 'prop-types';

const IconsArrowRightFill = props => {
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
      <path d="M14.584 5.586L20.998 12l-6.414 6.414L13.17 17l4-4H3v-2h14.17l-4-4 1.414-1.414z"></path>
    </svg>
  );
};

IconsArrowRightFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsArrowRightFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsArrowRightFill;

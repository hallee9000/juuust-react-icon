import React from 'react';
import PropTypes from 'prop-types';

const IconsSmileFill = props => {
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
      <path d="M8.447 8.106a1 1 0 10-.894 1.789l.211.105-.211.106a1 1 0 10.894 1.789l2-1a1 1 0 000-1.79l-2-1z"></path>
      <path d="M16.894 8.553a1 1 0 01-.447 1.342l-.21.105.21.106a1 1 0 11-.894 1.789l-2-1a1 1 0 010-1.79l2-1a1 1 0 011.341.448z"></path>
      <path d="M7.482 15.182C7.177 14.608 7.63 14 8.281 14h7.438c.65 0 1.104.608.799 1.182C15.89 16.362 14.56 18 12 18c-2.56 0-3.89-1.638-4.518-2.818z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
      ></path>
    </svg>
  );
};

IconsSmileFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsSmileFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsSmileFill;

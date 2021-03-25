import React from 'react';
import PropTypes from 'prop-types';

const ThumbsUpFill = props => {
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.75 8.05263L8.75 16L8.75 20H17.9136C19.1218 20 20.1571 19.1359 20.3732 17.9472L21.2498 13.1261C21.6404 10.9777 19.9899 9 17.8063 9H15L15.621 5.2739C15.8194 4.08358 14.9015 3 13.6947 3C13.098 3 12.534 3.27284 12.1636 3.74071L8.75 8.05263ZM7.25 20V16.75H3.5V19.5C3.5 19.7761 3.72386 20 4 20H7.25ZM7.25 15.25V9H4C3.72386 9 3.5 9.22386 3.5 9.5V15.25H7.25Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

ThumbsUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThumbsUpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThumbsUpFill;

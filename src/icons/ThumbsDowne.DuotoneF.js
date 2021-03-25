import React from 'react';
import PropTypes from 'prop-types';

const ThumbsDowneDuotoneF = props => {
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
          opacity="0.8"
          d="M12.1636 20.2593L8 15H4C3.72386 15 3.5 14.7761 3.5 14.5V4.5C3.5 4.22386 3.72386 4 4 4H17.9136C19.1218 4 20.1571 4.86406 20.3732 6.05279L21.2498 10.8739C21.6404 13.0223 19.9899 15 17.8063 15H15L15.621 18.7261C15.8194 19.9164 14.9015 21 13.6947 21C13.098 21 12.534 20.7272 12.1636 20.2593Z"
          fill="#4400FF"
        />
        <path
          opacity="0.8"
          d="M8 8L4 8"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M8 14.5L8 4.5"
          stroke="#4009D7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

ThumbsDowneDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThumbsDowneDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThumbsDowneDuotoneF;

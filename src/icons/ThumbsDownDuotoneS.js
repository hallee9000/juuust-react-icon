import React from 'react';
import PropTypes from 'prop-types';

const ThumbsDownDuotoneS = props => {
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
          d="M8 11L4 11"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M4 14.5H8V4.5H4V14.5Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M8 14.5L12.5502 19.9603C12.8352 20.3023 13.2574 20.5 13.7026 20.5H13.7293C14.6562 20.5 15.3613 19.6677 15.2089 18.7534L14.5 14.5H17.8406C19.7337 14.5 21.1536 12.768 20.7823 10.9117L19.8216 6.10777C19.6346 5.17292 18.8138 4.5 17.8604 4.5H8"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

ThumbsDownDuotoneS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThumbsDownDuotoneS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThumbsDownDuotoneS;

import React from 'react';
import PropTypes from 'prop-types';

const ThumbsDownStroke = props => {
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
          d="M8 11L4 11"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 14.5H8V4.5H4V14.5Z"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5502 19.9603L8 14.5V4.5H17.8604C18.8138 4.5 19.6346 5.17292 19.8216 6.10777L20.7823 10.9117C21.1536 12.768 19.7337 14.5 17.8406 14.5H14.5L15.2089 18.7534C15.3613 19.6677 14.6562 20.5 13.7293 20.5H13.7026C13.2574 20.5 12.8352 20.3023 12.5502 19.9603Z"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

ThumbsDownStroke.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ThumbsDownStroke.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ThumbsDownStroke;

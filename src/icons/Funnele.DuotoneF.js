import React from 'react';
import PropTypes from 'prop-types';

const FunneleDuotoneF = props => {
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
          d="M20 4H4C3.72386 4 3.5 4.22386 3.5 4.5V8.03663C3.5 8.17293 3.55564 8.30332 3.65405 8.39763L9.35495 13.861C9.44803 13.9502 9.57198 14 9.7009 14H14.2991C14.428 14 14.552 13.9502 14.645 13.861L20.346 8.39763C20.4444 8.30332 20.5 8.17293 20.5 8.03663V4.5C20.5 4.22386 20.2761 4 20 4Z"
          fill="#4400FF"
        />
        <path
          opacity="0.8"
          d="M4 8L20 8"
          stroke="#4400FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M9.5 15.5H14.5V17.7169C14.5 17.8925 14.4079 18.0553 14.2572 18.1457L10.2572 20.5457C9.92399 20.7456 9.5 20.5056 9.5 20.1169V15.5Z"
          fill="#34D399"
        />
      </svg>
    </svg>
  );
};

FunneleDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FunneleDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FunneleDuotoneF;

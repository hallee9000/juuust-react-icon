import React from 'react';
import PropTypes from 'prop-types';

const CloudDownloadeDuotoneF = props => {
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.01159 10.0938C5.22197 6.41685 8.27035 3.5 12 3.5C15.7296 3.5 18.778 6.41685 18.9884 10.0938C20.7755 11.002 22 12.858 22 15C22 18.0376 19.5376 20.5 16.5 20.5H7.5C4.46243 20.5 2 18.0376 2 15C2 12.858 3.22445 11.002 5.01159 10.0938Z"
          fill="#4400FF"
        />
        <g opacity="0.8">
          <path
            d="M12 14.5L12 9.5"
            stroke="#34D399"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 13L12 16L9 13"
            stroke="#34D399"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </svg>
  );
};

CloudDownloadeDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudDownloadeDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudDownloadeDuotoneF;

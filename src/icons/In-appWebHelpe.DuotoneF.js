import React from 'react';
import PropTypes from 'prop-types';

const InAppWebHelpeDuotoneF = props => {
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
          d="M3 5.5C3 4.67157 3.67157 4 4.5 4L19.5 4C20.3284 4 21 4.67157 21 5.5V15.5C21 16.3284 20.3284 17 19.5 17H4.5C3.67157 17 3 16.3284 3 15.5V5.5Z"
          fill="#4400FF"
        />
        <path
          opacity="0.8"
          d="M10 19.5H14"
          stroke="#4400FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M21 13.5L3 13.5L3 15.5C3 16.3284 3.67157 17 4.5 17L19.5 17C20.3284 17 21 16.3284 21 15.5L21 13.5Z"
          fill="#4400FF"
        />
        <circle opacity="0.8" cx="12" cy="15.25" r="0.5" fill="#34D399" />
        <path opacity="0.8" d="M11 17H13V20H11V17Z" fill="#4400FF" />
        <path
          opacity="0.8"
          d="M3 13C3 12.4477 3.44772 12 4 12H6.5C7.05228 12 7.5 12.4477 7.5 13V19C7.5 19.5523 7.05228 20 6.5 20H4C3.44772 20 3 19.5523 3 19V13Z"
          fill="#34D399"
        />
        <path
          opacity="0.8"
          d="M5.75 18.5C5.75 18.7761 5.52614 19 5.25 19C4.97386 19 4.75 18.7761 4.75 18.5C4.75 18.2239 4.97386 18 5.25 18C5.52614 18 5.75 18.2239 5.75 18.5Z"
          fill="#4400FF"
        />
      </svg>
    </svg>
  );
};

InAppWebHelpeDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InAppWebHelpeDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InAppWebHelpeDuotoneF;

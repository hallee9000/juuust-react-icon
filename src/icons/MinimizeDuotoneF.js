import React from 'react';
import PropTypes from 'prop-types';

const MinimizeDuotoneF = props => {
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
          d="M13.5 10.5L19.5 4.5"
          stroke="#4400FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M18 10.5H13.5V6"
          stroke="#34D399"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M4.5 19.5L10.5 13.5"
          stroke="#4400FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M6 13.5H10.5V18"
          stroke="#34D399"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

MinimizeDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MinimizeDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MinimizeDuotoneF;

import React from 'react';
import PropTypes from 'prop-types';

const LowercaseDuotoneF = props => {
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
          d="M19.5 15.75C19.5 17.5449 18.1569 19 16.5 19C14.8431 19 13.5 17.5449 13.5 15.75C13.5 13.9551 14.8431 12.5 16.5 12.5C18.1569 12.5 19.5 13.9551 19.5 15.75Z"
          stroke="#34D399"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M19.5 12.5V19"
          stroke="#34D399"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M10.5 15.75C10.5 17.5449 9.15685 19 7.5 19C5.84315 19 4.5 17.5449 4.5 15.75C4.5 13.9551 5.84315 12.5 7.5 12.5C9.15685 12.5 10.5 13.9551 10.5 15.75Z"
          stroke="#4400FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M10.5 12.5V19"
          stroke="#4400FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

LowercaseDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LowercaseDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LowercaseDuotoneF;

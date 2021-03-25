import React from 'react';
import PropTypes from 'prop-types';

const LettercaseDuotoneS = props => {
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
          d="M20.5 15.75C20.5 17.5449 19.1569 19 17.5 19C15.8431 19 14.5 17.5449 14.5 15.75C14.5 13.9551 15.8431 12.5 17.5 12.5C19.1569 12.5 20.5 13.9551 20.5 15.75Z"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M20.5 12.5V19"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M5.5 14H10.5"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M3.5 19L8 6.5L12.5 19"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

LettercaseDuotoneS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LettercaseDuotoneS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LettercaseDuotoneS;

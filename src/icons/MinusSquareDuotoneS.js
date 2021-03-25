import React from 'react';
import PropTypes from 'prop-types';

const MinusSquareDuotoneS = props => {
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
        <rect
          opacity="0.8"
          x="4.25"
          y="4.25"
          width="15.5"
          height="15.5"
          rx="2"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M8 12H16"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

MinusSquareDuotoneS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MinusSquareDuotoneS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MinusSquareDuotoneS;

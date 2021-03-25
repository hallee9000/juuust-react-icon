import React from 'react';
import PropTypes from 'prop-types';

const PlusSquareDuotoneF = props => {
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
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2.5"
          fill="#4400FF"
        />
        <path
          d="M12 8.25L12 15.75"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.25 12H15.75"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

PlusSquareDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlusSquareDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlusSquareDuotoneF;

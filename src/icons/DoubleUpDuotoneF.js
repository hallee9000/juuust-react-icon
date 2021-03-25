import React from 'react';
import PropTypes from 'prop-types';

const DoubleUpDuotoneF = props => {
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
          d="M17 17.5L12 12.5L7 17.5"
          stroke="#34D399"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M17 10.5L12 5.5L7 10.5"
          stroke="#4400FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

DoubleUpDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DoubleUpDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DoubleUpDuotoneF;

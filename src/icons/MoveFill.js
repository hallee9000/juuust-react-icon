import React from 'react';
import PropTypes from 'prop-types';

const MoveFill = props => {
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
          d="M18.5 14.5L21 12L18.5 9.5L18.5 14.5Z"
          fill="#0A0A0B"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.5 14.5L3 12L5.5 9.5L5.5 14.5Z"
          fill="#0A0A0B"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 18.5L12 21L14.5 18.5H9.5Z"
          fill="#0A0A0B"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 5.5L12 3L14.5 5.5H9.5Z"
          fill="#0A0A0B"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

MoveFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MoveFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MoveFill;

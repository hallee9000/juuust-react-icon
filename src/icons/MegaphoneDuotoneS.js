import React from 'react';
import PropTypes from 'prop-types';

const MegaphoneDuotoneS = props => {
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
          d="M17 14C18.6569 14 20 12.6569 20 11C20 9.34315 18.6569 8 17 8"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M4 11C4 8.79086 5.79086 7 8 7H11L17 4V18L11 15H8C5.79086 15 4 13.2091 4 11V11Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M7 15L8 20H11L10 15"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

MegaphoneDuotoneS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MegaphoneDuotoneS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MegaphoneDuotoneS;

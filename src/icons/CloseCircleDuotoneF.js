import React from 'react';
import PropTypes from 'prop-types';

const CloseCircleDuotoneF = props => {
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
        <circle opacity="0.8" cx="12" cy="12" r="8.5" fill="#4400FF" />
        <path
          d="M14.75 9.25L9.25 14.75"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.25 9.25L14.75 14.75"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

CloseCircleDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloseCircleDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloseCircleDuotoneF;

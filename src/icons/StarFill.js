import React from 'react';
import PropTypes from 'prop-types';

const StarFill = props => {
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
          d="M9.75 9.5L12.25 3L14.25 9.5H21.25L15.75 13.5L18.25 20.5L12.25 16L6.25 20.5L8.75 13.5L2.75 9.5H9.75Z"
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

StarFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StarFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StarFill;

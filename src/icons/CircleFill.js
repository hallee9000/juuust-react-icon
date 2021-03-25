import React from 'react';
import PropTypes from 'prop-types';

const CircleFill = props => {
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
        <circle
          cx="12"
          cy="12"
          r="8.25"
          fill="#0A0A0B"
          stroke="#0A0A0B"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

CircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CircleFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CircleFill;

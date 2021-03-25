import React from 'react';
import PropTypes from 'prop-types';

const StatsDuotoneS = props => {
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
          x="3"
          y="14.75"
          width="4"
          height="5"
          rx="0.5"
          stroke="#4400FF"
          stroke-width="1.5"
        />
        <rect
          opacity="0.8"
          x="17"
          y="7.75"
          width="4"
          height="12"
          rx="0.5"
          stroke="#4400FF"
          stroke-width="1.5"
        />
        <rect
          opacity="0.8"
          x="10"
          y="3.75"
          width="4"
          height="16"
          rx="0.5"
          stroke="#34D399"
          stroke-width="1.5"
        />
      </svg>
    </svg>
  );
};

StatsDuotoneS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StatsDuotoneS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StatsDuotoneS;

import React from 'react';
import PropTypes from 'prop-types';

const StatsFill = props => {
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
          x="3"
          y="14.75"
          width="4"
          height="5"
          rx="0.5"
          fill="#0A0A0B"
          stroke="#0A0A0B"
        />
        <rect
          x="17"
          y="7.75"
          width="4"
          height="12"
          rx="0.5"
          fill="#0A0A0B"
          stroke="#0A0A0B"
        />
        <rect
          x="10"
          y="3.75"
          width="4"
          height="16"
          rx="0.5"
          fill="#0A0A0B"
          stroke="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

StatsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StatsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default StatsFill;

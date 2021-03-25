import React from 'react';
import PropTypes from 'prop-types';

const SquareDefault = props => {
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
        <rect x="4.75" y="4.75" width="14.5" height="14.5" fill="#EBEFFF" />
        <rect
          opacity="0.8"
          x="4.75"
          y="4.75"
          width="14.5"
          height="14.5"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

SquareDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SquareDefault.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SquareDefault;

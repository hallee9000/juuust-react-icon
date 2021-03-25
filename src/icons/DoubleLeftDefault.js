import React from 'react';
import PropTypes from 'prop-types';

const DoubleLeftDefault = props => {
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
          d="M17.5 17L12.5 12L17.5 7"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.5 17L5.5 12L10.5 7"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

DoubleLeftDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DoubleLeftDefault.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DoubleLeftDefault;

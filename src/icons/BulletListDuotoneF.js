import React from 'react';
import PropTypes from 'prop-types';

const BulletListDuotoneF = props => {
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
          d="M6.5 17H20.5"
          stroke="#4400FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle opacity="0.8" cx="3" cy="17" r="1" fill="#34D399" />
        <path
          opacity="0.8"
          d="M6.5 12H20.5"
          stroke="#4400FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle opacity="0.8" cx="3" cy="12" r="1" fill="#34D399" />
        <path
          opacity="0.8"
          d="M6.5 7H20.5"
          stroke="#4400FF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle opacity="0.8" cx="3" cy="7" r="1" fill="#34D399" />
      </svg>
    </svg>
  );
};

BulletListDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BulletListDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BulletListDuotoneF;

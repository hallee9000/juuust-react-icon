import React from 'react';
import PropTypes from 'prop-types';

const BulletListDefault = props => {
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
          d="M6.5 17H20.5"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="3.25" cy="17" r="0.75" fill="#0A0A0B" />
        <path
          d="M6.5 12H20.5"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="3.25" cy="12" r="0.75" fill="#0A0A0B" />
        <path
          d="M6.5 7H20.5"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="3.25" cy="7" r="0.75" fill="#0A0A0B" />
      </svg>
    </svg>
  );
};

BulletListDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BulletListDefault.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BulletListDefault;

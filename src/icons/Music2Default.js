import React from 'react';
import PropTypes from 'prop-types';

const Music2Default = props => {
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
          d="M13 16.5C13 17.8807 11.8807 19 10.5 19C9.11929 19 8 17.8807 8 16.5C8 15.1193 9.11929 14 10.5 14C11.8807 14 13 15.1193 13 16.5Z"
          fill="#EBEFFF"
        />
        <path
          opacity="0.8"
          d="M13 16.5C13 17.8807 11.8807 19 10.5 19C9.11929 19 8 17.8807 8 16.5C8 15.1193 9.11929 14 10.5 14C11.8807 14 13 15.1193 13 16.5Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M13 16.5V6.5L15.5 6"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

Music2Default.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Music2Default.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Music2Default;

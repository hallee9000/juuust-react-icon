import React from 'react';
import PropTypes from 'prop-types';

const Music1Default = props => {
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
          d="M19 15C19 16.3807 17.8807 17.5 16.5 17.5C15.1193 17.5 14 16.3807 14 15C14 13.6193 15.1193 12.5 16.5 12.5C17.8807 12.5 19 13.6193 19 15Z"
          fill="#EBEFFF"
        />
        <path
          opacity="0.8"
          d="M9 16.5C9 17.8807 7.88071 19 6.5 19C5.11929 19 4 17.8807 4 16.5C4 15.1193 5.11929 14 6.5 14C7.88071 14 9 15.1193 9 16.5Z"
          fill="#EBEFFF"
        />
        <path
          opacity="0.8"
          d="M19 15C19 16.3807 17.8807 17.5 16.5 17.5C15.1193 17.5 14 16.3807 14 15C14 13.6193 15.1193 12.5 16.5 12.5C17.8807 12.5 19 13.6193 19 15Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M9 16.5C9 17.8807 7.88071 19 6.5 19C5.11929 19 4 17.8807 4 16.5C4 15.1193 5.11929 14 6.5 14C7.88071 14 9 15.1193 9 16.5Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M9 16.5V6.5L19 5V15"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

Music1Default.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Music1Default.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Music1Default;

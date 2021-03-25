import React from 'react';
import PropTypes from 'prop-types';

const DesktopDefault = props => {
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
          d="M19 4.5H5C4.17157 4.5 3.5 5.17157 3.5 6V15C3.5 15.8284 4.17157 16.5 5 16.5H19C19.8284 16.5 20.5 15.8284 20.5 15V6C20.5 5.17157 19.8284 4.5 19 4.5Z"
          fill="#EBEFFF"
        />
        <path
          opacity="0.8"
          d="M3.5 12.5L20.5 12.5"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M19 4.5H5C4.17157 4.5 3.5 5.17157 3.5 6V15C3.5 15.8284 4.17157 16.5 5 16.5H19C19.8284 16.5 20.5 15.8284 20.5 15V6C20.5 5.17157 19.8284 4.5 19 4.5Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          opacity="0.8"
          d="M10 19.5H14"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M12 16.5L12 19.5"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle opacity="0.8" cx="12" cy="14.5" r="0.5" fill="#34D399" />
      </svg>
    </svg>
  );
};

DesktopDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DesktopDefault.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DesktopDefault;

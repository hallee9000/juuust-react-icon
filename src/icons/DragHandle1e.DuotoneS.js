import React from 'react';
import PropTypes from 'prop-types';

const DragHandle1eDuotoneS = props => {
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
          d="M14 19C14 19.8284 14.6716 20.5 15.5 20.5C16.3284 20.5 17 19.8284 17 19C17 18.1716 16.3284 17.5 15.5 17.5C14.6716 17.5 14 18.1716 14 19Z"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M14 12C14 12.8284 14.6716 13.5 15.5 13.5C16.3284 13.5 17 12.8284 17 12C17 11.1716 16.3284 10.5 15.5 10.5C14.6716 10.5 14 11.1716 14 12Z"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M14 5C14 5.82843 14.6716 6.5 15.5 6.5C16.3284 6.5 17 5.82843 17 5C17 4.17157 16.3284 3.5 15.5 3.5C14.6716 3.5 14 4.17157 14 5Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M7 19C7 19.8284 7.67157 20.5 8.5 20.5C9.32843 20.5 10 19.8284 10 19C10 18.1716 9.32843 17.5 8.5 17.5C7.67157 17.5 7 18.1716 7 19Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M7 12C7 12.8284 7.67157 13.5 8.5 13.5C9.32843 13.5 10 12.8284 10 12C10 11.1716 9.32843 10.5 8.5 10.5C7.67157 10.5 7 11.1716 7 12Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M7 5C7 5.82843 7.67157 6.5 8.5 6.5C9.32843 6.5 10 5.82843 10 5C10 4.17157 9.32843 3.5 8.5 3.5C7.67157 3.5 7 4.17157 7 5Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

DragHandle1eDuotoneS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DragHandle1eDuotoneS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DragHandle1eDuotoneS;

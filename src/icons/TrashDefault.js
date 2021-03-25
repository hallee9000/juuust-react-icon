import React from 'react';
import PropTypes from 'prop-types';

const TrashDefault = props => {
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
          d="M18 18V6H14V5C14 4.44772 13.5523 4 13 4H11C10.4477 4 10 4.44772 10 5V6H6V18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18Z"
          fill="#EBEFFF"
        />
        <path
          opacity="0.8"
          d="M6 6L6 18C6 18.5523 6.44772 19 7 19H17C17.5523 19 18 18.5523 18 18V6M14 6V5C14 4.44772 13.5523 4 13 4H11C10.4477 4 10 4.44772 10 5V6"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M20 6L4 6"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M10 15V10"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M14 15V10"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

TrashDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TrashDefault.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TrashDefault;

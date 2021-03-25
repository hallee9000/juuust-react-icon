import React from 'react';
import PropTypes from 'prop-types';

const EditDuotoneS = props => {
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
          d="M13.5 6.5L17.5 10.5"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M15 5.00003L4.50003 15.5L4.5 19.5H8.50003L19 9.00001C20.1046 7.89544 20.1046 6.10457 19 5.00001C17.8954 3.89546 16.1046 3.89548 15 5.00003Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

EditDuotoneS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EditDuotoneS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EditDuotoneS;

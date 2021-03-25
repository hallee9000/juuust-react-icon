import React from 'react';
import PropTypes from 'prop-types';

const MouseFill = props => {
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.5 10.0001C5.5 6.41027 8.41015 3.50012 12 3.50012C15.5899 3.50012 18.5 6.41027 18.5 10.0001L18.5 14.0001C18.5 17.59 15.5899 20.5001 12 20.5001C8.41015 20.5001 5.5 17.59 5.5 14.0001V10.0001ZM12.75 8.00012C12.75 7.58591 12.4142 7.25012 12 7.25012C11.5858 7.25012 11.25 7.58591 11.25 8.00012L11.25 11.0001C11.25 11.4143 11.5858 11.7501 12 11.7501C12.4142 11.7501 12.75 11.4143 12.75 11.0001L12.75 8.00012Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

MouseFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MouseFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MouseFill;

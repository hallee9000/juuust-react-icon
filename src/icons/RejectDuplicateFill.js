import React from 'react';
import PropTypes from 'prop-types';

const RejectDuplicateFill = props => {
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
          d="M7.5 15H4.5C3.94771 15 3.5 14.5523 3.5 14V4.5C3.5 3.94772 3.94771 3.5 4.5 3.5H14C14.5523 3.5 15 3.94771 15 4.5V7.5H9.75C8.50736 7.5 7.5 8.50736 7.5 9.75V15Z"
          fill="#0A0A0B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.5 19.5C20.5 20.0523 20.0523 20.5 19.5 20.5H10C9.44771 20.5 9 20.0523 9 19.5V10C9 9.44771 9.44772 9 10 9H19.5C20.0523 9 20.5 9.44772 20.5 10V19.5ZM17.2803 12.2197C17.5732 12.5126 17.5732 12.9874 17.2803 13.2803L15.8107 14.75L17.2803 16.2197C17.5732 16.5126 17.5732 16.9874 17.2803 17.2803C16.9874 17.5732 16.5126 17.5732 16.2197 17.2803L14.75 15.8107L13.2803 17.2803C12.9874 17.5732 12.5126 17.5732 12.2197 17.2803C11.9268 16.9874 11.9268 16.5126 12.2197 16.2197L13.6893 14.75L12.2197 13.2803C11.9268 12.9874 11.9268 12.5126 12.2197 12.2197C12.5126 11.9268 12.9874 11.9268 13.2803 12.2197L14.75 13.6893L16.2197 12.2197C16.5126 11.9268 16.9874 11.9268 17.2803 12.2197Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

RejectDuplicateFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RejectDuplicateFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RejectDuplicateFill;

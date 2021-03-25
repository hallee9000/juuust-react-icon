import React from 'react';
import PropTypes from 'prop-types';

const LockFill = props => {
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
          d="M7.25 7.75C7.25 5.12665 9.37665 3 12 3C14.6234 3 16.75 5.12665 16.75 7.75V9H18C19.1046 9 20 9.89543 20 11V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V11C4 9.89543 4.89543 9 6 9H7.25V7.75ZM14.75 7.75V9H9.25V7.75C9.25 6.23122 10.4812 5 12 5C13.5188 5 14.75 6.23122 14.75 7.75ZM12 15.75C12.6904 15.75 13.25 15.1904 13.25 14.5C13.25 13.8096 12.6904 13.25 12 13.25C11.3096 13.25 10.75 13.8096 10.75 14.5C10.75 15.1904 11.3096 15.75 12 15.75Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

LockFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LockFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LockFill;

import React from 'react';
import PropTypes from 'prop-types';

const PlusSquareFill = props => {
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
          d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6ZM12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25V11.25H15.75C16.1642 11.25 16.5 11.5858 16.5 12C16.5 12.4142 16.1642 12.75 15.75 12.75H12.75V15.75C12.75 16.1642 12.4142 16.5 12 16.5C11.5858 16.5 11.25 16.1642 11.25 15.75V12.75H8.25C7.83579 12.75 7.5 12.4142 7.5 12C7.5 11.5858 7.83579 11.25 8.25 11.25H11.25V8.25C11.25 7.83579 11.5858 7.5 12 7.5Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

PlusSquareFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlusSquareFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PlusSquareFill;

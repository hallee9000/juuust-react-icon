import React from 'react';
import PropTypes from 'prop-types';

const CloudUploadFill = props => {
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
          d="M5.01159 10.0938C5.22197 6.41685 8.27035 3.5 12 3.5C15.7296 3.5 18.778 6.41685 18.9884 10.0938C20.7755 11.002 22 12.858 22 15C22 18.0376 19.5376 20.5 16.5 20.5H7.5C4.46243 20.5 2 18.0376 2 15C2 12.858 3.22445 11.002 5.01159 10.0938ZM11.25 11.8107V16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5V11.8107L14.4697 13.5303C14.7626 13.8232 15.2374 13.8232 15.5303 13.5303C15.8232 13.2374 15.8232 12.7626 15.5303 12.4697L12.5306 9.46997C12.3949 9.33407 12.2073 9.25 12 9.25C11.797 9.25 11.6128 9.33065 11.4778 9.46167C11.4751 9.46431 11.4724 9.46698 11.4697 9.46967L8.46967 12.4697C8.17678 12.7626 8.17678 13.2374 8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303L11.25 11.8107Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

CloudUploadFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudUploadFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CloudUploadFill;

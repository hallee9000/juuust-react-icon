import React from 'react';
import PropTypes from 'prop-types';

const CallForwardeDuotoneF = props => {
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
          d="M18.7425 13.8106C19.1877 13.9219 19.5 14.3219 19.5 14.7808V18.5C19.5 19.0523 19.0517 19.5036 18.5007 19.4667C16.1413 19.3088 13.9744 18.5969 12 17.5C9.75 16.25 7.75 14.25 6.5 12C5.40312 10.0256 4.69124 7.85871 4.5333 5.49932C4.49641 4.94826 4.94772 4.5 5.5 4.5H9.21922C9.67809 4.5 10.0781 4.8123 10.1894 5.25746L11 8.5L9.25 10.5C10 12.5 11.5 14 13.5 14.75L15.5 13L18.7425 13.8106Z"
          fill="#4400FF"
        />
        <path
          opacity="0.8"
          d="M21 6.50006H14.5"
          stroke="#34D399"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M18 3.50006L21 6.50006L18 9.50006"
          stroke="#34D399"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

CallForwardeDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CallForwardeDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CallForwardeDuotoneF;

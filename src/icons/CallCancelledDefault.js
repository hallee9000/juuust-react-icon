import React from 'react';
import PropTypes from 'prop-types';

const CallCancelledDefault = props => {
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
        <g opacity="0.8">
          <path
            d="M12 17.5C13.9744 18.5969 16.1413 19.3088 18.5007 19.4667C19.0517 19.5036 19.5 19.0523 19.5 18.5V14.7808C19.5 14.3219 19.1877 13.9219 18.7425 13.8106L15.5 13L13.5 14.75C12.4979 14.3742 11.6213 13.8101 10.9017 13.0892L8.88323 15.1332C9.81871 16.0673 10.8783 16.8768 12 17.5Z"
            fill="#EBEFFF"
          />
          <path
            d="M4.5333 5.49932C4.69124 7.85871 5.40312 10.0256 6.5 12C6.6554 12.2797 6.9 12.6 6.9 12.6L11 8.5L10.1894 5.25746C10.0781 4.8123 9.67809 4.5 9.21922 4.5H5.5C4.94772 4.5 4.49641 4.94826 4.5333 5.49932Z"
            fill="#EBEFFF"
          />
        </g>
        <path
          opacity="0.8"
          d="M9.25 10.5L11 8.5L10.1894 5.25746C10.0781 4.8123 9.67809 4.5 9.21922 4.5H5.5C4.94772 4.5 4.49641 4.94826 4.5333 5.49932C4.69124 7.85871 5.40312 10.0256 6.5 12C6.6554 12.2797 6.82238 12.5556 7 12.8266M10.9017 13.0892C11.6213 13.8101 12.4979 14.3742 13.5 14.75L15.5 13L18.7425 13.8106C19.1877 13.9219 19.5 14.3219 19.5 14.7808V18.5C19.5 19.0523 19.0517 19.5036 18.5007 19.4667C16.1413 19.3088 13.9744 18.5969 12 17.5C10.8783 16.8768 9.81871 16.0673 8.88323 15.1332"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M19.5 4.5L4.5 19.5"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

CallCancelledDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CallCancelledDefault.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CallCancelledDefault;

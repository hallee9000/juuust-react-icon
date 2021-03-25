import React from 'react';
import PropTypes from 'prop-types';

const NotificationOffDuotoneS = props => {
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
          d="M15 17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M18 14V10.5C18 7.18629 15.3137 4.5 12 4.5C11.1314 4.5 10.306 4.67568 9.56069 5M17 17H4.5L6 14V10.5C6 9.24253 6.38683 8.0615 7.04798 7.0891"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M13 4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M4 4L20 20"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

NotificationOffDuotoneS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NotificationOffDuotoneS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NotificationOffDuotoneS;

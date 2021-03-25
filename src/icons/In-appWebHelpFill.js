import React from 'react';
import PropTypes from 'prop-types';

const InAppWebHelpFill = props => {
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
          d="M3 5.5C3 4.67157 3.67157 4 4.5 4H19.5C20.3284 4 21 4.67157 21 5.5V12.5H8.91465C8.70873 11.9174 8.15311 11.5 7.5 11.5H3V5.5ZM9 13.5H21V15.5C21 16.3284 20.3284 17 19.5 17H9V13.5ZM12 15.75C12.2761 15.75 12.5 15.5261 12.5 15.25C12.5 14.9739 12.2761 14.75 12 14.75C11.7239 14.75 11.5 14.9739 11.5 15.25C11.5 15.5261 11.7239 15.75 12 15.75Z"
          fill="#0A0A0B"
        />
        <rect x="10" y="19" width="4" height="1" rx="0.5" fill="#0A0A0B" />
        <path d="M11 17H13V20H11V17Z" fill="#0A0A0B" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.5 12.5C3.94772 12.5 3.5 12.9477 3.5 13.5V19C3.5 19.5523 3.94772 20 4.5 20H7C7.55228 20 8 19.5523 8 19V13.5C8 12.9477 7.55228 12.5 7 12.5H4.5ZM5.75 19C6.02614 19 6.25 18.7761 6.25 18.5C6.25 18.2239 6.02614 18 5.75 18C5.47386 18 5.25 18.2239 5.25 18.5C5.25 18.7761 5.47386 19 5.75 19Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

InAppWebHelpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InAppWebHelpFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InAppWebHelpFill;

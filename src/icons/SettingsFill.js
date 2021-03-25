import React from 'react';
import PropTypes from 'prop-types';

const SettingsFill = props => {
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
          d="M16.7875 4.63435L15.391 5.59028C14.9939 5.37975 14.5749 5.20504 14.1382 5.07046L13.8265 3.40786C13.7821 3.17137 13.5756 3 13.335 3H10.665C10.4244 3 10.2179 3.17137 10.1735 3.40786L9.86179 5.07046C9.42513 5.20504 9.00608 5.37976 8.60893 5.59031L7.2124 4.63435C7.01382 4.49842 6.74658 4.52323 6.57642 4.69339L4.69339 6.57642C4.52323 6.74658 4.49842 7.01382 4.63435 7.2124L5.59031 8.60893C5.37976 9.00608 5.20504 9.42513 5.07046 9.86179L3.40786 10.1735C3.17137 10.2179 3 10.4244 3 10.665V13.335C3 13.5756 3.17137 13.7821 3.40786 13.8265L5.07046 14.1382C5.20504 14.5749 5.37975 14.9939 5.59028 15.391L4.63435 16.7875C4.49842 16.9861 4.52323 17.2533 4.69339 17.4235L6.57642 19.3065C6.74658 19.4767 7.01382 19.5015 7.2124 19.3656L8.60886 18.4097C9.00603 18.6202 9.42511 18.795 9.86179 18.9295L10.1735 20.5921C10.2179 20.8286 10.4244 21 10.665 21H13.335C13.5756 21 13.7821 20.8286 13.8265 20.5921L14.1382 18.9295C14.5749 18.795 14.9939 18.6202 15.3911 18.4097L16.7875 19.3656C16.9861 19.5015 17.2533 19.4767 17.4235 19.3065L19.3065 17.4235C19.4767 17.2533 19.5015 16.9861 19.3656 16.7875L18.4097 15.3911C18.6202 14.9939 18.795 14.5749 18.9295 14.1382L20.5921 13.8265C20.8286 13.7821 21 13.5756 21 13.335V10.665C21 10.4244 20.8286 10.2179 20.5921 10.1735L18.9295 9.86179C18.795 9.42511 18.6202 9.00603 18.4097 8.60886L19.3656 7.2124C19.5015 7.01382 19.4767 6.74658 19.3065 6.57642L17.4235 4.69339C17.2533 4.52323 16.9861 4.49842 16.7875 4.63435ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

SettingsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SettingsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SettingsFill;

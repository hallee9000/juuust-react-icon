import React from 'react';
import PropTypes from 'prop-types';

const ProfileDuotoneS = props => {
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
          d="M12 20C17.25 20 20 18 20 18C19 15.75 15.75 14 12 14C8.25 14 5 15.75 4 18C4 18 6.75 20 12 20Z"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M12 11C13.7931 11 15.25 9.54082 15.25 7.7449C15.25 5.94898 13.7931 4.5 12 4.5C10.2069 4.5 8.75 5.95918 8.75 7.7551C8.75 9.55102 10.2069 11 12 11Z"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

ProfileDuotoneS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProfileDuotoneS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ProfileDuotoneS;

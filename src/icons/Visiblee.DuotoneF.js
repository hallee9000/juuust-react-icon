import React from 'react';
import PropTypes from 'prop-types';

const VisibleeDuotoneF = props => {
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.49006 12.4362C2.33213 12.164 2.33213 11.8361 2.49006 11.5638C3.37779 10.0334 6.7002 5 12 5C17.3306 5 20.4789 10.092 21.2898 11.5902C21.43 11.8491 21.43 12.151 21.2898 12.4099C20.4789 13.9081 17.3306 19 12 19C6.70021 19 3.3778 13.9667 2.49006 12.4362Z"
          fill="#4400FF"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 12C3 12 6.25 5.5 12 5.5C17.75 5.5 21 12 21 12C21 12 17.75 18.5 12 18.5C6.25 18.5 3 12 3 12Z"
          stroke="#4400FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
          fill="#34D399"
        />
      </svg>
    </svg>
  );
};

VisibleeDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VisibleeDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VisibleeDuotoneF;

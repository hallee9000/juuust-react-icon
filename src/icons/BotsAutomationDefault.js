import React from 'react';
import PropTypes from 'prop-types';

const BotsAutomationDefault = props => {
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
          d="M3 10.5C3 9.11929 4.11929 8 5.5 8H18.5C19.8807 8 21 9.11929 21 10.5V17.5C21 18.8807 19.8807 20 18.5 20H5.5C4.11929 20 3 18.8807 3 17.5V10.5Z"
          fill="#EBEFFF"
        />
        <path
          opacity="0.8"
          d="M3.5 10.5C3.5 9.39543 4.39543 8.5 5.5 8.5L18.5 8.5C19.6046 8.5 20.5 9.39543 20.5 10.5V17.5C20.5 18.6046 19.6046 19.5 18.5 19.5H5.5C4.39543 19.5 3.5 18.6046 3.5 17.5V10.5Z"
          stroke="#4400FF"
          stroke-width="1.5"
        />
        <circle
          opacity="0.8"
          cx="8.5"
          cy="14"
          r="2"
          fill="#34D399"
          stroke="#34D399"
        />
        <circle
          opacity="0.8"
          cx="15.5"
          cy="14"
          r="2"
          fill="#34D399"
          stroke="#34D399"
        />
        <path
          opacity="0.8"
          d="M12 4V8.5"
          stroke="#4400FF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle opacity="0.8" cx="12" cy="4" r="2" fill="#34D399" />
      </svg>
    </svg>
  );
};

BotsAutomationDefault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BotsAutomationDefault.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BotsAutomationDefault;

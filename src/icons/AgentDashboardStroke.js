import React from 'react';
import PropTypes from 'prop-types';

const AgentDashboardStroke = props => {
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
          d="M17.5 6.5H19C19.8284 6.5 20.5 7.17157 20.5 8V16C20.5 16.8284 19.8284 17.5 19 17.5H5C4.17157 17.5 3.5 16.8284 3.5 16V8C3.5 7.17157 4.17157 6.5 5 6.5H6.5"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 20.5H14"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 17.5L12 20.5"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="6" r="3" fill="#0A0A0B" />
        <path
          d="M5.75 17.5C5.75 14.0482 8.54822 11.25 12 11.25C15.4518 11.25 18.25 14.0482 18.25 17.5"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

AgentDashboardStroke.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AgentDashboardStroke.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AgentDashboardStroke;

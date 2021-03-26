
  import React from 'react';
  import PropTypes from 'prop-types';

  const AgentDashboardeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M10 20.5H14" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M11 18H13V21H11V18Z" fill="#4400FF"/>
<path opacity="0.8" d="M3 7.5C3 6.67157 3.67157 6 4.5 6H19.5C20.3284 6 21 6.67157 21 7.5V16.5C21 17.3284 20.3284 18 19.5 18H4.5C3.67157 18 3 17.3284 3 16.5V7.5Z" fill="#4400FF"/>
<path opacity="0.8" d="M15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6Z" fill="#34D399"/>
<path opacity="0.9" d="M12 11C8.13401 11 5 14.134 5 18L19 18C19 14.134 15.866 11 12 11Z" fill="#4400FF"/>
</svg>

    )
  };

  AgentDashboardeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  AgentDashboardeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default AgentDashboardeDuotoneF

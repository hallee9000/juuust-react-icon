
  import React from 'react';
  import PropTypes from 'prop-types';

  const AgentDashboardDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M17.5 6.5H19C19.8284 6.5 20.5 7.17157 20.5 8V16C20.5 16.8284 19.8284 17.5 19 17.5H5C4.17157 17.5 3.5 16.8284 3.5 16V8C3.5 7.17157 4.17157 6.5 5 6.5H6.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M10 20.5H14" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M12 17.5L12 20.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle opacity="0.8" cx="12" cy="6" r="3" fill="#34D399"/>
<path opacity="0.8" d="M5.75 17.5C5.75 14.0482 8.54822 11.25 12 11.25C15.4518 11.25 18.25 14.0482 18.25 17.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  AgentDashboardDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  AgentDashboardDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default AgentDashboardDefault

  import React from 'react';
  import PropTypes from 'prop-types';

  const AgentDashboardFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4624 2.71964C10.9013 2.42312 11.4304 2.24998 12 2.24998C13.5188 2.24998 14.75 3.4812 14.75 4.99998C14.75 6.51877 13.5188 7.74998 12 7.74998C10.7412 7.74998 9.67996 6.90423 9.3535 5.74997H9.35352C9.28608 5.51156 9.25 5.25998 9.25 4.99997C9.25 4.47187 9.39886 3.97853 9.65691 3.55964C9.86269 3.2256 10.1379 2.93889 10.4624 2.71964ZM16.184 5.74997H19C19.8284 5.74997 20.5 6.42155 20.5 7.24997V16C20.5 16.8284 19.8284 17.5 19 17.5H18.75C18.75 13.7721 15.7279 10.75 12 10.75C8.27207 10.75 5.24999 13.7721 5.24999 17.5H5C4.17157 17.5 3.5 16.8284 3.5 16V7.24997C3.5 6.42155 4.17157 5.74997 5 5.74997H7.81595C8.17018 7.73949 9.90869 9.24998 12 9.24998C14.0913 9.24998 15.8298 7.73949 16.184 5.74997ZM6.74999 17.5H17.25C17.25 14.6005 14.8995 12.25 12 12.25C9.1005 12.25 6.74999 14.6005 6.74999 17.5ZM13 17.5V19.5H14C14.2761 19.5 14.5 19.7238 14.5 20C14.5 20.2761 14.2761 20.5 14 20.5H13V20.5H11V20.5H10C9.72386 20.5 9.5 20.2761 9.5 20C9.5 19.7238 9.72386 19.5 10 19.5H11V17.5H13Z" fill="currentcolor"/>
</svg>

    )
  };

  AgentDashboardFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  AgentDashboardFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default AgentDashboardFill

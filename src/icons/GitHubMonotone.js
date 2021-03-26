
  import React from 'react';
  import PropTypes from 'prop-types';

  const GitHubMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.70001C7.30387 3.70001 3.5 7.50388 3.5 12.2C3.5 15.9569 5.93677 19.1399 9.31277 20.2669C9.73542 20.3452 9.89196 20.0843 9.89196 19.8547C9.89196 19.6512 9.88674 19.119 9.88152 18.4093C7.5178 18.9207 7.01688 17.2718 7.01688 17.2718C6.63075 16.2909 6.07244 16.0248 6.07244 16.0248C5.30018 15.4977 6.12983 15.5082 6.12983 15.5082C6.98036 15.5708 7.43432 16.3848 7.43432 16.3848C8.19091 17.6841 9.42234 17.3084 9.90761 17.0892C9.98588 16.5413 10.205 16.1656 10.4451 15.9517C8.56139 15.743 6.57858 15.0125 6.57858 11.7565C6.57858 10.8277 6.9073 10.0711 7.45519 9.47625C7.36648 9.2571 7.07428 8.39614 7.53346 7.22733C7.53346 7.22733 8.24831 6.99774 9.87109 8.09872C10.5494 7.91088 11.2747 7.81696 12 7.81174C12.7201 7.81696 13.4506 7.91088 14.1289 8.09872C15.7517 6.99774 16.4665 7.22733 16.4665 7.22733C16.9309 8.39614 16.6387 9.26232 16.55 9.47625C17.0927 10.0711 17.4214 10.8277 17.4214 11.7565C17.4214 15.0229 15.4334 15.7378 13.5393 15.9517C13.8419 16.2126 14.1185 16.7344 14.1185 17.5275C14.1185 18.665 14.108 19.5782 14.108 19.8599C14.108 20.0895 14.2594 20.3504 14.6924 20.2669C18.0684 19.1399 20.5 15.9569 20.5 12.2052C20.5 7.50388 16.6961 3.70001 12 3.70001Z" fill="#0A0A0B"/>
</svg>

    )
  };

  GitHubMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  GitHubMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default GitHubMonotone

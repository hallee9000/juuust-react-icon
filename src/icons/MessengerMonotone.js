
  import React from 'react';
  import PropTypes from 'prop-types';

  const MessengerMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 11.995C3.5 7.25744 7.21169 3.75 12 3.75C16.7883 3.75 20.5 7.25744 20.5 11.995C20.5 16.7326 16.7883 20.24 12 20.24C11.1399 20.24 10.3148 20.1264 9.53951 19.9133C9.3888 19.8718 9.22854 19.8835 9.08552 19.9466L7.39839 20.6913C6.95707 20.8862 6.4589 20.5723 6.44411 20.0901L6.39782 18.5781C6.39212 18.3918 6.30832 18.2177 6.16948 18.0934C4.51558 16.6144 3.5 14.4731 3.5 11.995ZM9.39306 10.445L6.89619 14.4064C6.65657 14.7865 7.12387 15.2149 7.48184 14.9433L10.1639 12.9078C10.3453 12.7701 10.596 12.7694 10.7782 12.906L12.7642 14.3955C13.3601 14.8424 14.2106 14.6855 14.6078 14.0553L17.1047 10.094C17.3442 9.71379 16.8769 9.28539 16.519 9.55705L13.8369 11.5925C13.6555 11.7302 13.4048 11.731 13.2226 11.5943L11.2367 10.1049C10.6407 9.65795 9.79023 9.81486 9.39306 10.445Z" fill="#0A0A0B"/>
</svg>

    )
  };

  MessengerMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MessengerMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MessengerMonotone

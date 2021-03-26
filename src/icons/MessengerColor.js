
  import React from 'react';
  import PropTypes from 'prop-types';

  const MessengerColor = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C7.21169 3.75 3.5 7.25744 3.5 11.995C3.5 14.4731 4.51558 16.6144 6.16948 18.0934C6.30832 18.2177 6.39212 18.3918 6.39782 18.5781L6.44411 20.0901C6.4589 20.5723 6.95707 20.8862 7.39839 20.6913L9.08552 19.9466C9.22854 19.8835 9.3888 19.8718 9.53951 19.9133C10.3148 20.1264 11.1399 20.24 12 20.24C16.7883 20.24 20.5 16.7326 20.5 11.995C20.5 7.25744 16.7883 3.75 12 3.75Z" fill="url(#paint0_radial)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.89619 14.4063L9.39306 10.445C9.79023 9.81476 10.6407 9.65785 11.2367 10.1048L13.2226 11.5942C13.4048 11.7309 13.6555 11.7302 13.8369 11.5925L16.519 9.55696C16.8769 9.2853 17.3442 9.7137 17.1047 10.0939L14.6078 14.0552C14.2106 14.6854 13.3601 14.8423 12.7642 14.3954L10.7782 12.9059C10.596 12.7693 10.3453 12.77 10.1639 12.9077L7.48184 14.9432C7.12387 15.2148 6.65657 14.7864 6.89619 14.4063Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.77206 20.6591) scale(18.5231)">
<stop stop-color="#0099FF"/>
<stop offset="0.609754" stop-color="#A033FF"/>
<stop offset="0.934823" stop-color="#FF5280"/>
<stop offset="1" stop-color="#FF7061"/>
</radialGradient>
</defs>
</svg>

    )
  };

  MessengerColor.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MessengerColor.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MessengerColor

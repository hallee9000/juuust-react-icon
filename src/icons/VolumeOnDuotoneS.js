
  import React from 'react';
  import PropTypes from 'prop-types';

  const VolumeOnDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M13 20V4L8 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H8L13 20Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M16 5.07031C18.3912 6.45355 20 9.03893 20 12.0001C20 14.9612 18.3912 17.5466 16 18.9298" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M16.0004 9C16.6281 9.83566 17 10.8744 17 12C17 13.1257 16.6278 14.1643 16 15" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  VolumeOnDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  VolumeOnDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default VolumeOnDuotoneS


  import React from 'react';
  import PropTypes from 'prop-types';

  const VolumeOffDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M13.5 20V4L8.5 8H5.5C4.94772 8 4.5 8.44772 4.5 9V15C4.5 15.5523 4.94772 16 5.5 16H8.5L13.5 20Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M16.5 10L20.5 14" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M20.5 10L16.5 14" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  VolumeOffDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  VolumeOffDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default VolumeOffDuotoneS

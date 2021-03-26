
  import React from 'react';
  import PropTypes from 'prop-types';

  const SadFaceDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M8.75 16C8.75 16 9.96875 14.5 12 14.5C14.0312 14.5 15.25 16 15.25 16" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M10.25 10C10.25 10.5523 9.80228 11 9.25 11C8.69772 11 8.25 10.5523 8.25 10" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M15.75 10C15.75 10.5523 15.3023 11 14.75 11C14.1977 11 13.75 10.5523 13.75 10" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  SadFaceDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  SadFaceDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default SadFaceDuotoneS
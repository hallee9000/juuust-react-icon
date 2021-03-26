
  import React from 'react';
  import PropTypes from 'prop-types';

  const MixFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 6.5L5.48116 6.5C6.92297 6.5 8.2946 7.1224 9.24404 8.20748L9.5 8.5M20.5 17H17.491C15.333 17 13.3413 15.8411 12.2748 13.965L11.1579 12" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14.5L20.5 17L18 19.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 17.5H4.51806C6.67121 17.5 8.65927 16.3463 9.72752 14.4768L12.2725 10.0232C13.3407 8.15372 15.3288 7 17.4819 7H20.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 4.5L20.5 7L18 9.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MixFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MixFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MixFill

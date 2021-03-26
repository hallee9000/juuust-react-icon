
  import React from 'react';
  import PropTypes from 'prop-types';

  const MixDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M3.5 6.5L4.98134 6.5C6.83774 6.5 8.54132 7.52851 9.40593 9.17127L9.57895 9.5M20.5 17H17.491C15.333 17 13.3413 15.8411 12.2748 13.965L11.1579 12" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M18 14.5L20.5 17L18 19.5" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M3.5 17.5H4.51806C6.67121 17.5 8.65927 16.3463 9.72752 14.4768L12.2725 10.0232C13.3407 8.15372 15.3288 7 17.4819 7H20.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M18 4.5L20.5 7L18 9.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MixDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MixDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MixDefault

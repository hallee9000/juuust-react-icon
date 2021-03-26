
  import React from 'react';
  import PropTypes from 'prop-types';

  const ThumbsUpDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M8 16L4 16" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect opacity="0.8" x="4" y="9.5" width="4" height="10" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M8 9.5L12.5502 4.03972C12.8352 3.69773 13.2574 3.5 13.7026 3.5H13.7293C14.6562 3.5 15.3613 4.3323 15.2089 5.2466L14.5 9.5H17.8406C19.7337 9.5 21.1536 11.232 20.7823 13.0883L19.8216 17.8922C19.6346 18.8271 18.8138 19.5 17.8604 19.5H8" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  ThumbsUpDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ThumbsUpDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ThumbsUpDuotoneS

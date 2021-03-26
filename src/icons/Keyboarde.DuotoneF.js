
  import React from 'react';
  import PropTypes from 'prop-types';

  const KeyboardeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M20 5.5H4C2.89543 5.5 2 6.39543 2 7.5V16.5C2 17.6046 2.89543 18.5 4 18.5H20C21.1046 18.5 22 17.6046 22 16.5V7.5C22 6.39543 21.1046 5.5 20 5.5Z" fill="#4400FF"/>
<path opacity="0.8" d="M20 6H4C3.17157 6 2.5 6.67157 2.5 7.5V16.5C2.5 17.3284 3.17157 18 4 18H20C20.8284 18 21.5 17.3284 21.5 16.5V7.5C21.5 6.67157 20.8284 6 20 6Z" stroke="#4400FF" stroke-linecap="round"/>
<path opacity="0.8" d="M18 15H18.009" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M9.5 15L14.5 15" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6 15H6.009" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M18 12H18.009" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M14 12H14.009" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M10 12H10.009" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6 12H6.009" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M18 9H18.009" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M14 9H14.009" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M10 9H10.009" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6 9H6.009" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  KeyboardeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  KeyboardeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default KeyboardeDuotoneF

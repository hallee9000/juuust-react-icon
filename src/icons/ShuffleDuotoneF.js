
  import React from 'react';
  import PropTypes from 'prop-types';

  const ShuffleDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M4.5 4.5L9.5 9.5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M14.5 14.5L19.5 19.5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M15 19.5H19.5V15" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M4.5 19.5L19.5 4.5" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M15 4.5H19.5V9" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  ShuffleDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ShuffleDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ShuffleDuotoneF

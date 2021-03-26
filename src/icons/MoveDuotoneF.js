
  import React from 'react';
  import PropTypes from 'prop-types';

  const MoveDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M18.5 14.5L21 12L18.5 9.5L18.5 14.5Z" fill="#34D399" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M5.5 14.5L3 12L5.5 9.5L5.5 14.5Z" fill="#34D399" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M9.5 18.5L12 21L14.5 18.5H9.5Z" fill="#4400FF" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M9.5 5.5L12 3L14.5 5.5H9.5Z" fill="#4400FF" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MoveDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MoveDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MoveDuotoneF

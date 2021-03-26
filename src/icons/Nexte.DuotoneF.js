
  import React from 'react';
  import PropTypes from 'prop-types';

  const NexteDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M5.25 5L16.75 12L5.25 19V5Z" fill="#4400FF" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M20.25 5V19" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  NexteDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  NexteDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default NexteDuotoneF
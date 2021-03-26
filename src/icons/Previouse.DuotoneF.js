
  import React from 'react';
  import PropTypes from 'prop-types';

  const PreviouseDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M19.5 5L8 12L19.5 19V5Z" fill="#4400FF" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M4.5 5V19" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  PreviouseDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  PreviouseDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default PreviouseDuotoneF


  import React from 'react';
  import PropTypes from 'prop-types';

  const NextDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M5 5L16.5 12L5 19V5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M20 5V19" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  NextDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  NextDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default NextDuotoneS

  import React from 'react';
  import PropTypes from 'prop-types';

  const LettercaseToggleDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M9.5 15.75C9.5 17.5449 8.15685 19 6.5 19C4.84315 19 3.5 17.5449 3.5 15.75C3.5 13.9551 4.84315 12.5 6.5 12.5C8.15685 12.5 9.5 13.9551 9.5 15.75Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M9.5 12.5V19" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M14 14H19" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M12 19L16.5 6.5L21 19" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  LettercaseToggleDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  LettercaseToggleDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default LettercaseToggleDuotoneS


  import React from 'react';
  import PropTypes from 'prop-types';

  const TickCircleDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="12" r="8.25" stroke="#4400FF" stroke-width="1.5"/>
<path opacity="0.8" d="M8 11.75L11 14.75L16 9.75" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  TickCircleDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TickCircleDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TickCircleDuotoneS

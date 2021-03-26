
  import React from 'react';
  import PropTypes from 'prop-types';

  const PlusDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M5.00391 11.9952H19.0039" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M12.0039 4.99524V18.9952" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  PlusDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  PlusDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default PlusDuotoneS

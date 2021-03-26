
  import React from 'react';
  import PropTypes from 'prop-types';

  const Loader1DuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12 3V6.82" stroke="#4400FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.64001 5.64001L8.34001 8.34001" stroke="#4400FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H6.82" stroke="#4400FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.64001 18.36L8.34001 15.66" stroke="#4400FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21.0001V17.1801" stroke="#4400FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.36 18.36L15.66 15.66" stroke="#4400FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9999 12H17.1799" stroke="#4400FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.36 5.64001L15.66 8.34001" stroke="#4400FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

    )
  };

  Loader1DuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  Loader1DuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default Loader1DuotoneS
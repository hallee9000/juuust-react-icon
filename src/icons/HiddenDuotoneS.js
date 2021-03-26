
  import React from 'react';
  import PropTypes from 'prop-types';

  const HiddenDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M7.1451 7.16075C4.45672 9.08658 3 12 3 12C3 12 6.25 18.5 12 18.5C13.8922 18.5 15.5136 17.7961 16.8377 16.8516M10 5.76894C10.6282 5.59762 11.2953 5.5 12 5.5C17.75 5.5 21 12 21 12C21 12 20.3088 13.3824 19 14.8721" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.87868 9.87866C8.70711 11.0502 8.70711 12.9497 9.87868 14.1213C11.0503 15.2929 12.9497 15.2929 14.1213 14.1213" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M5 5L19 19" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  HiddenDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  HiddenDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default HiddenDuotoneS

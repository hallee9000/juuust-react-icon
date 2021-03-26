
  import React from 'react';
  import PropTypes from 'prop-types';

  const HiddeneDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M5.03033 4.46967C4.73744 4.17678 4.26256 4.17678 3.96967 4.46967C3.67678 4.76256 3.67678 5.23744 3.96967 5.53033L5.88706 7.44772C4.11576 8.95628 2.96069 10.7524 2.49003 11.5638C2.3321 11.8361 2.3321 12.164 2.49003 12.4362C3.37776 13.9667 6.70017 19 12 19C13.6143 19 15.0451 18.533 16.2796 17.8403L17.9697 19.5303C18.2626 19.8232 18.7374 19.8232 19.0303 19.5303C19.3232 19.2374 19.3232 18.7626 19.0303 18.4697L5.03033 4.46967ZM21.5099 12.4362C21.0876 13.1642 20.1145 14.6847 18.6398 16.0791L8.38119 5.82052C9.45731 5.31888 10.666 5 12 5C17.2998 5 20.6222 10.0334 21.5099 11.5638C21.6678 11.8361 21.6678 12.164 21.5099 12.4362Z" fill="#4400FF"/>
<path d="M9.7019 14.2981C8.4327 13.0289 8.4327 11.1053 9.7019 9.83606L14.1629 14.2981C12.8937 15.5673 10.9711 15.5673 9.7019 14.2981Z" fill="#34D399" stroke="#34D399" stroke-linecap="round"/>
</svg>

    )
  };

  HiddeneDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  HiddeneDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default HiddeneDuotoneF


  import React from 'react';
  import PropTypes from 'prop-types';

  const Loader2DuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M20 12C20 13.8508 19.3582 15.6444 18.1841 17.0751C17.0099 18.5059 15.376 19.4852 13.5607 19.8463C11.7454 20.2074 9.86112 19.9279 8.22883 19.0554C6.59653 18.1829 5.31725 16.7714 4.60896 15.0615C3.90068 13.3515 3.80721 11.4489 4.34448 9.67772C4.88175 7.90658 6.01652 6.37652 7.55544 5.34824C9.09436 4.31997 10.9422 3.85711 12.7841 4.03852C14.6261 4.21994 16.3481 5.0344 17.6569 6.34314" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  Loader2DuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  Loader2DuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default Loader2DuotoneF

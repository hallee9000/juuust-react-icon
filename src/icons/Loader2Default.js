
  import React from 'react';
  import PropTypes from 'prop-types';

  const Loader2Default = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12C20 13.8509 19.3582 15.6444 18.1841 17.0752C17.0099 18.5059 15.376 19.4852 13.5607 19.8463C11.7454 20.2074 9.86113 19.9279 8.22883 19.0554C6.59653 18.1829 5.31725 16.7714 4.60897 15.0615C3.90068 13.3515 3.80721 11.4489 4.34448 9.67774C4.88175 7.90659 6.01652 6.37653 7.55544 5.34826C9.09436 4.31998 10.9422 3.85712 12.7841 4.03853C14.6261 4.21995 16.3481 5.03441 17.6569 6.34316" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  Loader2Default.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  Loader2Default.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default Loader2Default

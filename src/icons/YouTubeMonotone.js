
  import React from 'react';
  import PropTypes from 'prop-types';

  const YouTubeMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5731 6.49527C19.8371 6.78351 20.0273 7.14223 20.1248 7.53571C20.6863 10.0036 20.5566 13.9012 20.1357 16.4643C20.0382 16.8578 19.848 17.2165 19.584 17.5047C19.3201 17.793 18.9915 18.0007 18.6312 18.1071C17.3119 18.5 12.0023 18.5 12.0023 18.5C12.0023 18.5 6.69267 18.5 5.37344 18.1071C5.01308 18.0007 4.68455 17.793 4.42058 17.5047C4.1566 17.2165 3.96638 16.8578 3.86887 16.4643C3.30411 14.0071 3.45892 10.1071 3.85796 7.54762C3.95548 7.15414 4.14569 6.79542 4.40967 6.50718C4.67365 6.21894 5.00218 6.01124 5.36254 5.90476C6.68177 5.5119 11.9914 5.5 11.9914 5.5C11.9914 5.5 17.301 5.5 18.6203 5.89286C18.9806 5.99933 19.3092 6.20703 19.5731 6.49527ZM14.5969 11.9794L10.4316 14.542V9.41675L14.5969 11.9794Z" fill="currentcolor"/>
</svg>

    )
  };

  YouTubeMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  YouTubeMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default YouTubeMonotone

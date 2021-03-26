
  import React from 'react';
  import PropTypes from 'prop-types';

  const GoogleMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9997 12.354C19.9997 11.7989 19.9547 11.2408 19.8587 10.6947H12.1609V13.8392H16.5691C16.3862 14.8534 15.7984 15.7505 14.9377 16.3206V18.361H17.5677C19.112 16.9387 19.9997 14.8384 19.9997 12.354Z" fill="currentcolor"/>
<path d="M12.1609 20.3323C14.362 20.3323 16.2183 19.6092 17.5707 18.361L14.9408 16.3206C14.2091 16.8187 13.2645 17.1008 12.1639 17.1008C10.0348 17.1008 8.22954 15.6635 7.5818 13.7312H4.86792V15.8346C6.25335 18.592 9.07519 20.3323 12.1609 20.3323Z" fill="currentcolor"/>
<path d="M7.57903 13.7312C7.23717 12.717 7.23717 11.6188 7.57903 10.6046V8.50128H4.86814C3.71062 10.8087 3.71062 13.5271 4.86814 15.8345L7.57903 13.7312Z" fill="currentcolor"/>
<path d="M12.1609 7.23209C13.3244 7.21409 14.449 7.65216 15.2916 8.45629L17.6217 6.1249C16.1463 4.73867 14.1881 3.97655 12.1609 4.00055C9.07519 4.00055 6.25335 5.74084 4.86792 8.5013L7.57881 10.6047C8.22354 8.66933 10.0318 7.23209 12.1609 7.23209Z" fill="currentcolor"/>
</svg>

    )
  };

  GoogleMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  GoogleMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default GoogleMonotone

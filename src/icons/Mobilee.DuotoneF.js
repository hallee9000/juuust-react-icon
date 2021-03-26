
  import React from 'react';
  import PropTypes from 'prop-types';

  const MobileeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M7.25 5C7.25 4.44772 7.69772 4 8.25 4H15.75C16.3023 4 16.75 4.44772 16.75 5V19C16.75 19.5523 16.3023 20 15.75 20H8.25C7.69772 20 7.25 19.5523 7.25 19L7.25 5Z" fill="#4400FF" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6.75 16.25L17.25 16.25" stroke="#34D399" stroke-linejoin="round"/>
<path opacity="0.8" d="M6.75 16.75L17.25 16.75V19C17.25 19.8284 16.5784 20.5 15.75 20.5H8.25C7.42157 20.5 6.75 19.8284 6.75 19V16.75Z" fill="#4400FF"/>
<path opacity="0.8" d="M12.75 18.5C12.75 18.9142 12.4142 19.25 12 19.25C11.5858 19.25 11.25 18.9142 11.25 18.5C11.25 18.0858 11.5858 17.75 12 17.75C12.4142 17.75 12.75 18.0858 12.75 18.5Z" fill="#34D399"/>
</svg>

    )
  };

  MobileeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MobileeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MobileeDuotoneF

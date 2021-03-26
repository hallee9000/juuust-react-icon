
  import React from 'react';
  import PropTypes from 'prop-types';

  const HeartStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6036 12.0343L12 20L4.3964 12.0343C2.76798 10.3284 2.74559 7.65061 4.34524 5.91765C6.06679 4.05264 8.99412 3.99412 10.7888 5.78883L12 7L13.2112 5.78883C15.0059 3.99412 17.9332 4.05264 19.6548 5.91765C21.2544 7.65061 21.232 10.3284 19.6036 12.0343Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  HeartStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  HeartStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default HeartStroke
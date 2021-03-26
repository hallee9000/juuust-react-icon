
  import React from 'react';
  import PropTypes from 'prop-types';

  const GameController2Fill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6394 16C12.714 16 12.7844 16.0335 12.8331 16.09C13.8417 17.2596 15.3344 18 17 18C20.0376 18 22.5 15.5376 22.5 12.5C22.5 9.46243 20.0376 7 17 7H7C3.96243 7 1.5 9.46243 1.5 12.5C1.5 15.5376 3.96243 18 7 18C8.6656 18 10.1583 17.2596 11.1669 16.09C11.2156 16.0335 11.286 16 11.3606 16H12.6394ZM7.5 11.25C7.5 10.9739 7.27614 10.75 7 10.75C6.72386 10.75 6.5 10.9739 6.5 11.25V11.75H6C5.72386 11.75 5.5 11.9739 5.5 12.25C5.5 12.5261 5.72386 12.75 6 12.75H6.5V13.25C6.5 13.5261 6.72386 13.75 7 13.75C7.27614 13.75 7.5 13.5261 7.5 13.25V12.75H8C8.27614 12.75 8.5 12.5261 8.5 12.25C8.5 11.9739 8.27614 11.75 8 11.75H7.5V11.25ZM17.5 11.25C17.5 11.5261 17.2761 11.75 17 11.75C16.7239 11.75 16.5 11.5261 16.5 11.25C16.5 10.9739 16.7239 10.75 17 10.75C17.2761 10.75 17.5 10.9739 17.5 11.25ZM16.5 12.25C16.5 12.5261 16.2761 12.75 16 12.75C15.7239 12.75 15.5 12.5261 15.5 12.25C15.5 11.9739 15.7239 11.75 16 11.75C16.2761 11.75 16.5 11.9739 16.5 12.25ZM17.5 13.25C17.5 13.5261 17.2761 13.75 17 13.75C16.7239 13.75 16.5 13.5261 16.5 13.25C16.5 12.9739 16.7239 12.75 17 12.75C17.2761 12.75 17.5 12.9739 17.5 13.25ZM18 12.75C18.2761 12.75 18.5 12.5261 18.5 12.25C18.5 11.9739 18.2761 11.75 18 11.75C17.7239 11.75 17.5 11.9739 17.5 12.25C17.5 12.5261 17.7239 12.75 18 12.75Z" fill="currentcolor"/>
</svg>

    )
  };

  GameController2Fill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  GameController2Fill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default GameController2Fill
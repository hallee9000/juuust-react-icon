
  import React from 'react';
  import PropTypes from 'prop-types';

  const MobileStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.25 16.5H16.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.25 5C7.25 4.44772 7.69772 4 8.25 4H15.75C16.3023 4 16.75 4.44772 16.75 5V19C16.75 19.5523 16.3023 20 15.75 20H8.25C7.69772 20 7.25 19.5523 7.25 19L7.25 5Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 18.25C12.5 18.5261 12.2761 18.75 12 18.75C11.7239 18.75 11.5 18.5261 11.5 18.25C11.5 17.9739 11.7239 17.75 12 17.75C12.2761 17.75 12.5 17.9739 12.5 18.25Z" fill="currentcolor"/>
</svg>

    )
  };

  MobileStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MobileStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MobileStroke

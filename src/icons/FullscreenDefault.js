
  import React from 'react';
  import PropTypes from 'prop-types';

  const FullscreenDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5H19V9" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 9L5 5L9 5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 19L5 19L5 15" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 19L19 19V15" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  FullscreenDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  FullscreenDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default FullscreenDefault
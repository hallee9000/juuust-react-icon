
  import React from 'react';
  import PropTypes from 'prop-types';

  const FormatStyleFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12V18.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 5.5L18.5 5.5V7.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 18.5H14" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.5L12 7.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 5.5L18.5 18.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  FormatStyleFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  FormatStyleFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default FormatStyleFill
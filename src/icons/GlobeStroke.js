
  import React from 'react';
  import PropTypes from 'prop-types';

  const GlobeStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8.25" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 12L20.25 12" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3.75C12 3.75 9 6.5 9 12C9 17.5 12 20.25 12 20.25" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3.75C12 3.75 15 6.5 15 12C15 17.5 12 20.25 12 20.25" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  GlobeStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  GlobeStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default GlobeStroke
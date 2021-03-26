
  import React from 'react';
  import PropTypes from 'prop-types';

  const FunnelStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4.5H20V8L14 14H10L4 8V4.5Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14H14V17.5L10 20V14Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  FunnelStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  FunnelStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default FunnelStroke

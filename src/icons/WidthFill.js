
  import React from 'react';
  import PropTypes from 'prop-types';

  const WidthFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 12L3.5 12" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 8.5L3.5 12L7 15.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 8.5L20.5 12L17 15.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  WidthFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  WidthFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default WidthFill

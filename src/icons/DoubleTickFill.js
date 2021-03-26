
  import React from 'react';
  import PropTypes from 'prop-types';

  const DoubleTickFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12L16.5 7.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12L7.5 16.5L9.75 14.25" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.75 12L12.25 16.5L21.25 7.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  DoubleTickFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DoubleTickFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DoubleTickFill

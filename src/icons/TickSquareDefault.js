
  import React from 'react';
  import PropTypes from 'prop-types';

  const TickSquareDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.25" y="4.25" width="15.5" height="15.5" rx="2" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 11.75L11 14.75L16 9.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  TickSquareDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TickSquareDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TickSquareDefault

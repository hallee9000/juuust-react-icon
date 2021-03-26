
  import React from 'react';
  import PropTypes from 'prop-types';

  const MinusSquareDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.25" y="4.25" width="15.5" height="15.5" rx="2" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12H16" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MinusSquareDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MinusSquareDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MinusSquareDefault

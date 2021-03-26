
  import React from 'react';
  import PropTypes from 'prop-types';

  const DoubleUpFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 17.75L12 12.75L7 17.75" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10.75L12 5.75L7 10.75" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  DoubleUpFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DoubleUpFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DoubleUpFill

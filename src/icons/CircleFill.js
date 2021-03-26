
  import React from 'react';
  import PropTypes from 'prop-types';

  const CircleFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8.25" fill="currentcolor" stroke="currentcolor" stroke-linejoin="round"/>
</svg>

    )
  };

  CircleFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CircleFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CircleFill

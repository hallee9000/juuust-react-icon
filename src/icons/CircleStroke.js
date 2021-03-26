
  import React from 'react';
  import PropTypes from 'prop-types';

  const CircleStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8.25" stroke="currentcolor" stroke-width="1.5" stroke-linejoin="round"/>
</svg>

    )
  };

  CircleStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CircleStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CircleStroke
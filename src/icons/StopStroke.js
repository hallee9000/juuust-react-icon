
  import React from 'react';
  import PropTypes from 'prop-types';

  const StopStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5.5" y="5.5" width="13" height="13" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  StopStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  StopStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default StopStroke
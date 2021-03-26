
  import React from 'react';
  import PropTypes from 'prop-types';

  const SquareStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.75" y="4.75" width="14.5" height="14.5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  SquareStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  SquareStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default SquareStroke


  import React from 'react';
  import PropTypes from 'prop-types';

  const CaretRightDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 16L14.5 12L10.5 8" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CaretRightDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CaretRightDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CaretRightDefault


  import React from 'react';
  import PropTypes from 'prop-types';

  const CaretDownDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10.5L12 14.5L8 10.5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CaretDownDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CaretDownDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CaretDownDefault

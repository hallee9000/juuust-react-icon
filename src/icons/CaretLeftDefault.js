
  import React from 'react';
  import PropTypes from 'prop-types';

  const CaretLeftDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 16L9.5 12L13.5 8" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CaretLeftDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CaretLeftDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CaretLeftDefault

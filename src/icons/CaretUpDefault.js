
  import React from 'react';
  import PropTypes from 'prop-types';

  const CaretUpDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 13.5L12 9.5L8 13.5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CaretUpDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CaretUpDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CaretUpDefault

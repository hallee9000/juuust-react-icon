
  import React from 'react';
  import PropTypes from 'prop-types';

  const ChevronDownFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.75L12 15.75L18 9.75" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  ChevronDownFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ChevronDownFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ChevronDownFill

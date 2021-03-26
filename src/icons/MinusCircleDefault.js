
  import React from 'react';
  import PropTypes from 'prop-types';

  const MinusCircleDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8.25" stroke="currentcolor" stroke-width="1.5"/>
<path d="M8 12H16" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MinusCircleDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MinusCircleDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MinusCircleDefault

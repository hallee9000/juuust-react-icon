
  import React from 'react';
  import PropTypes from 'prop-types';

  const StopFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5.5" y="5.5" width="13" height="13" fill="#0A0A0B" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  StopFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  StopFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default StopFill

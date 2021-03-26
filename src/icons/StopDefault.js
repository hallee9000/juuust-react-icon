
  import React from 'react';
  import PropTypes from 'prop-types';

  const StopDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5.5" y="5.5" width="13" height="13" fill="#EBEFFF"/>
<rect opacity="0.8" x="5.5" y="5.5" width="13" height="13" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  StopDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  StopDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default StopDefault

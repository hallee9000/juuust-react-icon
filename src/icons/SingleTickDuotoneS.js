
  import React from 'react';
  import PropTypes from 'prop-types';

  const SingleTickDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M9.75 16.5L18.75 7.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M5.25 12L9.75 16.5" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  SingleTickDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  SingleTickDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default SingleTickDuotoneS

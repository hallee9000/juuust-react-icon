
  import React from 'react';
  import PropTypes from 'prop-types';

  const CloseSquareDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.8" x="4" y="4" width="16" height="16" rx="2.5" fill="#4400FF"/>
<path d="M14.75 9.25L9.25 14.75" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25 9.25L14.75 14.75" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CloseSquareDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CloseSquareDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CloseSquareDuotoneF

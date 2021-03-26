
  import React from 'react';
  import PropTypes from 'prop-types';

  const ChevronLeftDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M14.25 18L8.25 12L14.25 6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    )
  };

  ChevronLeftDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ChevronLeftDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ChevronLeftDefault

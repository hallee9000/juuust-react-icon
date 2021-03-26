
  import React from 'react';
  import PropTypes from 'prop-types';

  const ChevronRightDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M9.75 6L15.75 12L9.75 18" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect width={size} height={size} fill="white"/>
</clipPath>
</defs>
</svg>

    )
  };

  ChevronRightDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ChevronRightDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ChevronRightDefault

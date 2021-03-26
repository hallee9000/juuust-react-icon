
  import React from 'react';
  import PropTypes from 'prop-types';

  const ChevronRightDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path opacity="0.8" d="M15.75 12L9.75 18" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M15.75 12L9.75 6" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    )
  };

  ChevronRightDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ChevronRightDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ChevronRightDuotoneF

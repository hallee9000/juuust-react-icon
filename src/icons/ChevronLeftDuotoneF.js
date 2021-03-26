
  import React from 'react';
  import PropTypes from 'prop-types';

  const ChevronLeftDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path opacity="0.8" d="M8.25 12L14.25 18" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M8.25 12L14.25 6" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect width={size} height={size} fill="white"/>
</clipPath>
</defs>
</svg>

    )
  };

  ChevronLeftDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ChevronLeftDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ChevronLeftDuotoneF

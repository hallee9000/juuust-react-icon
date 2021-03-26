
  import React from 'react';
  import PropTypes from 'prop-types';

  const HorizontalFilterDutoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M3.5 6L11 6" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 6L20.5 6" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 12L11.5 12" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12L20.5 12" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 18L9 18" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 18H20.5" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 4L11 8" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 10L15 14" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 16L9 20" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

    )
  };

  HorizontalFilterDutoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  HorizontalFilterDutoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default HorizontalFilterDutoneF

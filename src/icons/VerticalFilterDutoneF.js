
  import React from 'react';
  import PropTypes from 'prop-types';

  const VerticalFilterDutoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M5.5 20V13" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 9.5L5.5 4" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V12.5" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9V4" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 20V15" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5 11.5V4" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 13L7.5 13" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 9L14 9" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 15L20.5 15" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

    )
  };

  VerticalFilterDutoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  VerticalFilterDutoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default VerticalFilterDutoneF

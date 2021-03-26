
  import React from 'react';
  import PropTypes from 'prop-types';

  const NumberListFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 17H20.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 17C3 17.2761 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.2761 4 17C4 16.7239 3.77614 16.5 3.5 16.5L4 16H3" stroke="#0A0A0B" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 12H20.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 12 3 12.5 3 12.5H4" stroke="#0A0A0B" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 7H20.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7.5H4M3.5 7.5V6L3 6.5" stroke="#0A0A0B" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  NumberListFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  NumberListFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default NumberListFill

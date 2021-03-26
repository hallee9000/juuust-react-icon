
  import React from 'react';
  import PropTypes from 'prop-types';

  const CenterDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 18L17.5 18" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 14L20.5 14" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 10H17.5" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 6H20.5" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CenterDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CenterDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CenterDefault

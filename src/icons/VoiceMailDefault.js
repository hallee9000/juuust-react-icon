
  import React from 'react';
  import PropTypes from 'prop-types';

  const VoiceMailDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="6.5" cy="11.5" r="3.5" fill="#EBEFFF"/>
<circle opacity="0.8" cx="17.5" cy="11.5" r="3.5" fill="#EBEFFF"/>
<path opacity="0.8" d="M17.5 15H6.5" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle opacity="0.8" cx="6.5" cy="11.5" r="3.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle opacity="0.8" cx="17.5" cy="11.5" r="3.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  VoiceMailDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  VoiceMailDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default VoiceMailDefault

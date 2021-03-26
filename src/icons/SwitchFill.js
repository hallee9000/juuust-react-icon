
  import React from 'react';
  import PropTypes from 'prop-types';

  const SwitchFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 17H4.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 20.5L4.5 17L8 13.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 7H19.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 10.5L19.5 7L16 3.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  SwitchFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  SwitchFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default SwitchFill

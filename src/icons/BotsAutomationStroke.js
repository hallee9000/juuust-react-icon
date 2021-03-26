
  import React from 'react';
  import PropTypes from 'prop-types';

  const BotsAutomationStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 10.5C3.5 9.39543 4.39543 8.5 5.5 8.5L18.5 8.5C19.6046 8.5 20.5 9.39543 20.5 10.5V17.5C20.5 18.6046 19.6046 19.5 18.5 19.5H5.5C4.39543 19.5 3.5 18.6046 3.5 17.5V10.5Z" stroke="currentcolor" stroke-width="1.5"/>
<circle cx="8.5" cy="14" r="2" fill="currentcolor" stroke="currentcolor" stroke-width="1.5"/>
<circle cx="15.5" cy="14" r="2" fill="currentcolor" stroke="currentcolor" stroke-width="1.5"/>
<path d="M12 4V8.5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="4" r="2" fill="currentcolor"/>
</svg>

    )
  };

  BotsAutomationStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  BotsAutomationStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default BotsAutomationStroke
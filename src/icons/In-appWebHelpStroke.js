
  import React from 'react';
  import PropTypes from 'prop-types';

  const InAppWebHelpStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C3.44772 12 3 12.4477 3 13V19C3 19.5523 3.44772 20 4 20H6.5C7.05228 20 7.5 19.5523 7.5 19V13C7.5 12.4477 7.05228 12 6.5 12H4ZM5.25 18.5C5.52614 18.5 5.75 18.2761 5.75 18C5.75 17.7239 5.52614 17.5 5.25 17.5C4.97386 17.5 4.75 17.7239 4.75 18C4.75 18.2761 4.97386 18.5 5.25 18.5Z" fill="#0A0A0B"/>
<path d="M3.5 9.5V6C3.5 5.17157 4.17157 4.5 5 4.5H19C19.8284 4.5 20.5 5.17157 20.5 6V15C20.5 15.8284 19.8284 16.5 19 16.5H10" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10 19.5H14" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.5L12 19.5" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12.5L20.5 12.5" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="14.5" r="0.5" fill="#0A0A0B"/>
</svg>

    )
  };

  InAppWebHelpStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  InAppWebHelpStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default InAppWebHelpStroke

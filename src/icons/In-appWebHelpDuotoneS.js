
  import React from 'react';
  import PropTypes from 'prop-types';

  const InAppWebHelpDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M3.5 12.5C3.5 11.9477 3.94772 11.5 4.5 11.5H7C7.55228 11.5 8 11.9477 8 12.5V18.5C8 19.0523 7.55228 19.5 7 19.5H4.5C3.94772 19.5 3.5 19.0523 3.5 18.5V12.5Z" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6.25 18C6.25 18.2761 6.02614 18.5 5.75 18.5C5.47386 18.5 5.25 18.2761 5.25 18C5.25 17.7239 5.47386 17.5 5.75 17.5C6.02614 17.5 6.25 17.7239 6.25 18Z" fill="#4400FF"/>
<path opacity="0.8" d="M3.5 9V6C3.5 5.17157 4.17157 4.5 5 4.5H19C19.8284 4.5 20.5 5.17157 20.5 6V15C20.5 15.8284 19.8284 16.5 19 16.5H10.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round"/>
<path opacity="0.8" d="M10.5 19.5H13.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M12 16.5L12 19.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M10.5 12.5L20.5 12.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle opacity="0.8" cx="12" cy="14.5" r="0.5" fill="#4400FF"/>
</svg>

    )
  };

  InAppWebHelpDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  InAppWebHelpDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default InAppWebHelpDuotoneS

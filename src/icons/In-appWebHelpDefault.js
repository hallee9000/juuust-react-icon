
  import React from 'react';
  import PropTypes from 'prop-types';

  const InAppWebHelpDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 4H5C3.89543 4 3 4.89543 3 6V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15V6C21 4.89543 20.1046 4 19 4Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M3.5 9.5V6C3.5 5.17157 4.17157 4.5 5 4.5H19C19.8284 4.5 20.5 5.17157 20.5 6V15C20.5 15.8284 19.8284 16.5 19 16.5H10" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round"/>
<path opacity="0.8" d="M10 19.5H14" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M12 16.5L12 19.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M10 12.5L20.5 12.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle opacity="0.8" cx="12" cy="14.5" r="0.5" fill="#4400FF"/>
<g opacity="0.8">
<path d="M3 13C3 12.4477 3.44772 12 4 12H6.5C7.05228 12 7.5 12.4477 7.5 13V19C7.5 19.5523 7.05228 20 6.5 20H4C3.44772 20 3 19.5523 3 19V13Z" fill="#34D399"/>
<circle cx="5.25" cy="18" r="0.5" fill="#4400FF"/>
</g>
</svg>

    )
  };

  InAppWebHelpDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  InAppWebHelpDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default InAppWebHelpDefault

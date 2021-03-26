
  import React from 'react';
  import PropTypes from 'prop-types';

  const CloudUploadDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.01159 10.0938C5.22197 6.41685 8.27035 3.5 12 3.5C15.7296 3.5 18.778 6.41685 18.9884 10.0938C20.7755 11.002 22 12.858 22 15C22 18.0376 19.5376 20.5 16.5 20.5H7.5C4.46243 20.5 2 18.0376 2 15C2 12.858 3.22445 11.002 5.01159 10.0938Z" fill="#EBEFFF"/>
<g opacity="0.8">
<mask id="path-2-inside-1" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.01159 10.0938C5.22197 6.41685 8.27035 3.5 12 3.5C15.7296 3.5 18.778 6.41685 18.9884 10.0938C20.7755 11.002 22 12.858 22 15C22 18.0376 19.5376 20.5 16.5 20.5H7.5C4.46243 20.5 2 18.0376 2 15C2 12.858 3.22445 11.002 5.01159 10.0938Z"/>
</mask>
<path d="M5.01159 10.0938L5.69117 11.431L6.45988 11.0404L6.50914 10.1795L5.01159 10.0938ZM18.9884 10.0938L17.4909 10.1795L17.5401 11.0404L18.3088 11.431L18.9884 10.0938ZM6.50914 10.1795C6.67436 7.29179 9.07008 5 12 5V2C7.47063 2 3.76958 5.5419 3.51404 10.0081L6.50914 10.1795ZM12 5C14.9299 5 17.3256 7.29179 17.4909 10.1795L20.486 10.0081C20.2304 5.5419 16.5294 2 12 2V5ZM18.3088 11.431C19.6123 12.0934 20.5 13.4444 20.5 15H23.5C23.5 12.2717 21.9388 9.91063 19.668 8.75658L18.3088 11.431ZM20.5 15C20.5 17.2091 18.7091 19 16.5 19V22C20.366 22 23.5 18.866 23.5 15H20.5ZM16.5 19H7.5V22H16.5V19ZM7.5 19C5.29086 19 3.5 17.2091 3.5 15H0.5C0.5 18.866 3.63401 22 7.5 22V19ZM3.5 15C3.5 13.4444 4.38774 12.0934 5.69117 11.431L4.33201 8.75658C2.06117 9.91063 0.5 12.2717 0.5 15H3.5Z" fill="#4400FF" mask="url(#path-2-inside-1)"/>
</g>
<path d="M12 10V16.5" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 13L12 10L9 13" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CloudUploadDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CloudUploadDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CloudUploadDefault

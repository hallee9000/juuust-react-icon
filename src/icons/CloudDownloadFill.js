
  import React from 'react';
  import PropTypes from 'prop-types';

  const CloudDownloadFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.01159 10.0938C5.22197 6.41685 8.27035 3.5 12 3.5C15.7296 3.5 18.778 6.41685 18.9884 10.0938C20.7755 11.002 22 12.858 22 15C22 18.0376 19.5376 20.5 16.5 20.5H7.5C4.46243 20.5 2 18.0376 2 15C2 12.858 3.22445 11.002 5.01159 10.0938ZM12 8.75C12.4142 8.75 12.75 9.08579 12.75 9.5V14.1893L14.4697 12.4697C14.7626 12.1768 15.2374 12.1768 15.5303 12.4697C15.8232 12.7626 15.8232 13.2374 15.5303 13.5303L12.5303 16.5303C12.3897 16.671 12.1989 16.75 12 16.75C11.8011 16.75 11.6103 16.671 11.4697 16.5303L8.46967 13.5303C8.17678 13.2374 8.17678 12.7626 8.46967 12.4697C8.76256 12.1768 9.23744 12.1768 9.53033 12.4697L11.25 14.1893V9.5C11.25 9.08579 11.5858 8.75 12 8.75Z" fill="currentcolor"/>
</svg>

    )
  };

  CloudDownloadFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CloudDownloadFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CloudDownloadFill

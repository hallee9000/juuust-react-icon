
  import React from 'react';
  import PropTypes from 'prop-types';

  const DesktopFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 19.5C9.5 19.2239 9.72386 19 10 19H14C14.2761 19 14.5 19.2239 14.5 19.5C14.5 19.7761 14.2761 20 14 20H10C9.72386 20 9.5 19.7761 9.5 19.5Z" fill="currentcolor"/>
<path d="M11 17H13V20H11V17Z" fill="currentcolor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 4C3.7835 4 3 4.7835 3 5.75V12.5H21V5.75C21 4.7835 20.2165 4 19.25 4H4.75ZM21 13.5H3V15.25C3 16.2165 3.7835 17 4.75 17H19.25C20.2165 17 21 16.2165 21 15.25V13.5ZM12.5 15.25C12.5 15.5261 12.2761 15.75 12 15.75C11.7239 15.75 11.5 15.5261 11.5 15.25C11.5 14.9739 11.7239 14.75 12 14.75C12.2761 14.75 12.5 14.9739 12.5 15.25Z" fill="currentcolor"/>
</svg>

    )
  };

  DesktopFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DesktopFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DesktopFill

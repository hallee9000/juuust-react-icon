
  import React from 'react';
  import PropTypes from 'prop-types';

  const MegaphoneFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7905 18.6725C17.1218 18.8254 17.5 18.5834 17.5 18.2185V17V15.1798V7.32019V6.00001V3.78144C17.5 3.41655 17.1218 3.17455 16.7905 3.32746L11.0499 5.97698C11.017 5.99214 10.9813 5.99999 10.9451 5.99999H8C5.23858 5.99999 3 8.23856 3 11C3 13.2061 4.42873 15.0785 6.41138 15.7423L7.41439 20.3562C7.46436 20.586 7.66777 20.75 7.90298 20.75H11.3796C11.6986 20.75 11.936 20.4554 11.8682 20.1438L10.9676 16.001C10.996 16.0036 11.0238 16.011 11.0499 16.023L16.7905 18.6725ZM19 7.94233V14.5576C20.0564 13.8377 20.75 12.6248 20.75 11.25C20.75 9.87515 20.0564 8.66232 19 7.94233Z" fill="currentcolor"/>
</svg>

    )
  };

  MegaphoneFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MegaphoneFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MegaphoneFill

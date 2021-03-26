
  import React from 'react';
  import PropTypes from 'prop-types';

  const NotificationFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5002 10.5001C18.5002 7.41301 16.3482 4.82856 13.4624 4.16515C13.3103 3.49791 12.7133 3 11.9999 3C11.2866 3 10.6896 3.49795 10.5374 4.16523C7.6519 4.82877 5.50002 7.41313 5.50002 10.5001V14L4.36178 16.2764C4.19555 16.6088 4.4373 17 4.809 17H7.99996H8.50021H15.5002H16H19.191C19.5627 17 19.8044 16.6089 19.6382 16.2764L18.5002 14V10.5001ZM15.1634 18.5H8.83702C9.39875 19.6825 10.604 20.5 12.0002 20.5C13.3964 20.5 14.6017 19.6825 15.1634 18.5Z" fill="currentcolor"/>
</svg>

    )
  };

  NotificationFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  NotificationFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default NotificationFill

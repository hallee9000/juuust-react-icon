
  import React from 'react';
  import PropTypes from 'prop-types';

  const NotificationOffStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 14V10.5C18 7.18629 15.3137 4.5 12 4.5C11.1078 4.5 10.2611 4.68538 9.5 5.02682M17 17H4.5L6 14V10.5C6 9.24253 6.38683 8.0615 7.04798 7.0891" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3.5C11.4477 3.5 11 3.94772 11 4.5H13C13 3.94772 12.5523 3.5 12 3.5Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 4L20 20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  NotificationOffStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  NotificationOffStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default NotificationOffStroke

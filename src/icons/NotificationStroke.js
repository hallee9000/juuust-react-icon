
  import React from 'react';
  import PropTypes from 'prop-types';

  const NotificationStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10.5V14L4.5 17H19.5L18 14V10.5C18 7.18629 15.3137 4.5 12 4.5C8.68629 4.5 6 7.18629 6 10.5Z" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3.5C11.4477 3.5 11 3.94772 11 4.5H13C13 3.94772 12.5523 3.5 12 3.5Z" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  NotificationStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  NotificationStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default NotificationStroke

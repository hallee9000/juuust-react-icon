
  import React from 'react';
  import PropTypes from 'prop-types';

  const NotificationActiveeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12.0005" cy="17" r="3.5" fill="#34D399"/>
<circle opacity="0.8" cx="12" cy="4.5" r="1.5" fill="#4400FF"/>
<path opacity="0.8" d="M5.5003 10.5001V14L4.11224 16.7764C3.94604 17.1089 4.18779 17.5 4.55947 17.5H19.4415C19.8132 17.5 20.0549 17.1088 19.8887 16.7764L18.5005 14V10.5001C18.5005 6.91019 15.5903 4 12.0004 4C8.41049 4 5.5003 6.91019 5.5003 10.5001Z" fill="#4400FF"/>
<path opacity="0.8" d="M3.75 8.00009C4.25 6.25 5.5 4.5 6.99994 3.5M20.2499 8.00009C19.7499 6.25 18.4999 4.5 17 3.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  NotificationActiveeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  NotificationActiveeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default NotificationActiveeDuotoneF

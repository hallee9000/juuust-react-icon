
  import React from 'react';
  import PropTypes from 'prop-types';

  const NotificationActiveDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M15 17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6 10.5V14L4.5 17H19.5L18 14V10.5C18 7.18629 15.3137 4.5 12 4.5C8.68629 4.5 6 7.18629 6 10.5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M13 4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M3.75 8.00009C4.25 6.25 5.5 4.5 6.99994 3.5M20.2499 8.00009C19.7499 6.25 18.4999 4.5 17 3.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  NotificationActiveDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  NotificationActiveDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default NotificationActiveDuotoneS

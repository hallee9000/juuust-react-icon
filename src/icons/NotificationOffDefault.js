
  import React from 'react';
  import PropTypes from 'prop-types';

  const NotificationOffDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4.5C11.5 4.22386 11.7239 4 12 4C12.2761 4 12.5 4.22386 12.5 4.5C12.5 4.50689 12.5001 4.51375 12.5004 4.52057C12.3354 4.50695 12.1685 4.5 12 4.5C11.8315 4.5 11.6646 4.50695 11.4996 4.52057C11.4999 4.51375 11.5 4.50689 11.5 4.5ZM10.5336 4.68049C10.5119 4.6245 10.5 4.56364 10.5 4.5C10.5 3.67157 11.1716 3 12 3C12.8284 3 13.5 3.67157 13.5 4.5C13.5 4.56364 13.4881 4.6245 13.4664 4.68049C16.0713 5.33481 18 7.69217 18 10.5V14L19.5 17H15C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17H4.5L6 14V10.5C6 7.69217 7.92871 5.33481 10.5336 4.68049Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M15 17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M18 14V10.5C18 7.18629 15.3137 4.5 12 4.5C11.1314 4.5 10.306 4.67568 9.56069 5M17 17H4.5L6 14V10.5C6 9.24253 6.38683 8.0615 7.04798 7.0891" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M13 4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M4 4L20 20" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  NotificationOffDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  NotificationOffDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default NotificationOffDefault

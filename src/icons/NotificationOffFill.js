
  import React from 'react';
  import PropTypes from 'prop-types';

  const NotificationOffFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5003 10.5001C18.5003 7.41301 16.3482 4.82856 13.4625 4.16515C13.3103 3.49791 12.7133 3 12 3C11.2866 3 10.6896 3.49795 10.5375 4.16523C9.73113 4.35066 8.98206 4.68609 8.32123 5.14057L18.5002 15.3195L18.5003 14V10.5001ZM19.617 18.5564L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L16.4393 17.5H16H15.4648H8.5357H8H4.55924C4.18756 17.5 3.94581 17.1089 4.11202 16.7764L5.50008 14V10.5001C5.50008 9.36339 5.79185 8.29484 6.30459 7.36525L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L5.56363 4.50297C5.57203 4.51225 5.58071 4.52137 5.58966 4.53033L19.5897 18.5303C19.5986 18.5393 19.6077 18.548 19.617 18.5564ZM12.0003 20.5C10.6041 20.5 9.39881 19.6825 8.83708 18.5H15.1634C14.6017 19.6825 13.3965 20.5 12.0003 20.5Z" fill="currentcolor"/>
</svg>

    )
  };

  NotificationOffFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  NotificationOffFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default NotificationOffFill

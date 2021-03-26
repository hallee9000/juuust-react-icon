
  import React from 'react';
  import PropTypes from 'prop-types';

  const DragHandle1Default = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 19C14.5 19.5523 14.9477 20 15.5 20C16.0523 20 16.5 19.5523 16.5 19C16.5 18.4477 16.0523 18 15.5 18C14.9477 18 14.5 18.4477 14.5 19Z" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 12C14.5 12.5523 14.9477 13 15.5 13C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11C14.9477 11 14.5 11.4477 14.5 12Z" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 5C14.5 5.55228 14.9477 6 15.5 6C16.0523 6 16.5 5.55228 16.5 5C16.5 4.44772 16.0523 4 15.5 4C14.9477 4 14.5 4.44772 14.5 5Z" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 19C7.5 19.5523 7.94772 20 8.5 20C9.05228 20 9.5 19.5523 9.5 19C9.5 18.4477 9.05228 18 8.5 18C7.94772 18 7.5 18.4477 7.5 19Z" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 12C7.5 12.5523 7.94772 13 8.5 13C9.05228 13 9.5 12.5523 9.5 12C9.5 11.4477 9.05228 11 8.5 11C7.94772 11 7.5 11.4477 7.5 12Z" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 5C7.5 5.55228 7.94772 6 8.5 6C9.05228 6 9.5 5.55228 9.5 5C9.5 4.44772 9.05228 4 8.5 4C7.94772 4 7.5 4.44772 7.5 5Z" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  DragHandle1Default.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DragHandle1Default.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DragHandle1Default
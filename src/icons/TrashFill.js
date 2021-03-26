
  import React from 'react';
  import PropTypes from 'prop-types';

  const TrashFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.5H13C13.8284 3.5 14.5 4.17157 14.5 5V5.25H18.5H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H18.5V18C18.5 18.8284 17.8284 19.5 17 19.5H7C6.17157 19.5 5.5 18.8284 5.5 18V6.75H4C3.58579 6.75 3.25 6.41421 3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H5.5H9.5V5C9.5 4.17157 10.1716 3.5 11 3.5ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10V15.5C10.75 15.9142 10.4142 16.25 10 16.25C9.58579 16.25 9.25 15.9142 9.25 15.5V10C9.25 9.58579 9.58579 9.25 10 9.25ZM14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10V15.5C13.25 15.9142 13.5858 16.25 14 16.25C14.4142 16.25 14.75 15.9142 14.75 15.5V10Z" fill="currentcolor"/>
</svg>

    )
  };

  TrashFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TrashFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TrashFill
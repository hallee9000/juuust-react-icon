
  import React from 'react';
  import PropTypes from 'prop-types';

  const UpdateDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.25 20.4999C19.6642 20.4999 20 20.1641 20 19.7499C20 19.3357 19.6642 18.9999 19.25 18.9999L19.25 20.4999ZM15.5 19.7499L14.75 19.7499C14.75 19.9488 14.829 20.1396 14.9697 20.2802C15.1103 20.4209 15.3011 20.4999 15.5 20.4999L15.5 19.7499ZM16.25 16C16.25 15.5858 15.9142 15.25 15.5 15.25C15.0858 15.25 14.75 15.5858 14.75 16L16.25 16ZM19.25 18.9999L15.5 18.9999L15.5 20.4999L19.25 20.4999L19.25 18.9999ZM16.25 19.7499L16.25 16L14.75 16L14.75 19.7499L16.25 19.7499Z" fill="currentcolor"/>
<path d="M12.5 4.25C16.25 4.25 20.25 7 20.25 12C20.25 16.25 17.0209 18.3389 15.75 19" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.75 3.50013C4.33579 3.50013 4 3.83592 4 4.25013C4 4.66435 4.33579 5.00013 4.75 5.00013L4.75 3.50013ZM8.5 4.25013L9.25 4.25013C9.25 4.05122 9.17098 3.86046 9.03033 3.7198C8.88968 3.57915 8.69891 3.50013 8.5 3.50013L8.5 4.25013ZM7.75 8C7.75 8.41421 8.08579 8.75 8.5 8.75C8.91421 8.75 9.25 8.41421 9.25 8L7.75 8ZM4.75 5.00013L8.5 5.00013L8.5 3.50013L4.75 3.50013L4.75 5.00013ZM7.75 4.25013L7.75 8L9.25 8L9.25 4.25013L7.75 4.25013Z" fill="currentcolor"/>
<path d="M11.45 19.75C7.5 19.75 3.75 16.75 3.75 12C3.75 7.75 6.97908 5.66114 8.25 5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  UpdateDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  UpdateDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default UpdateDefault

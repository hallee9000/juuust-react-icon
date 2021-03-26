
  import React from 'react';
  import PropTypes from 'prop-types';

  const CloseSquareFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6ZM15.2803 8.71967C15.5732 9.01256 15.5732 9.48744 15.2803 9.78033L13.0607 12L15.2803 14.2197C15.5732 14.5126 15.5732 14.9874 15.2803 15.2803C14.9874 15.5732 14.5126 15.5732 14.2197 15.2803L12 13.0607L9.78033 15.2803C9.48744 15.5732 9.01256 15.5732 8.71967 15.2803C8.42678 14.9874 8.42678 14.5126 8.71967 14.2197L10.9393 12L8.71967 9.78033C8.42678 9.48744 8.42678 9.01256 8.71967 8.71967C9.01256 8.42678 9.48744 8.42678 9.78033 8.71967L12 10.9393L14.2197 8.71967C14.5126 8.42678 14.9874 8.42678 15.2803 8.71967Z" fill="currentcolor"/>
</svg>

    )
  };

  CloseSquareFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CloseSquareFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CloseSquareFill

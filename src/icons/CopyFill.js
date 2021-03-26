
  import React from 'react';
  import PropTypes from 'prop-types';

  const CopyFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 9H19.5C20.0523 9 20.5 9.44772 20.5 10V19.5C20.5 20.0523 20.0523 20.5 19.5 20.5H10C9.44772 20.5 9 20.0523 9 19.5V16.5H14.25C15.4926 16.5 16.5 15.4926 16.5 14.25V9Z" fill="currentcolor"/>
<path d="M3.5 4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H14C14.5523 3.5 15 3.94772 15 4.5V14C15 14.5523 14.5523 15 14 15H4.5C3.94772 15 3.5 14.5523 3.5 14V4.5Z" fill="currentcolor"/>
</svg>

    )
  };

  CopyFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CopyFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CopyFill

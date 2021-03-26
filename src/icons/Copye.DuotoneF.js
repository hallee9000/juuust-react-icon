
  import React from 'react';
  import PropTypes from 'prop-types';

  const CopyeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M16.5 9H19.5C20.0523 9 20.5 9.44772 20.5 10V19.5C20.5 20.0523 20.0523 20.5 19.5 20.5H10C9.44772 20.5 9 20.0523 9 19.5V16.5H14.25C15.4926 16.5 16.5 15.4926 16.5 14.25V9Z" fill="#34D399"/>
<path opacity="0.8" d="M3.5 4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H14C14.5523 3.5 15 3.94772 15 4.5V14C15 14.5523 14.5523 15 14 15H4.5C3.94772 15 3.5 14.5523 3.5 14V4.5Z" fill="#4400FF"/>
</svg>

    )
  };

  CopyeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CopyeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CopyeDuotoneF

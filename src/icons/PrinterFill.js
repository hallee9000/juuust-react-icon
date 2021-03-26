
  import React from 'react';
  import PropTypes from 'prop-types';

  const PrinterFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 3.5H16C16.8284 3.5 17.5 4.17157 17.5 5V9H6.5V5C6.5 4.17157 7.17157 3.5 8 3.5ZM5.5 10.5H18.5C19.6046 10.5 20.5 11.3954 20.5 12.5V16C20.5 17.1046 19.6046 18 18.5 18H17.25V16C17.25 15.0335 16.4665 14.25 15.5 14.25L8.5 14.25C7.5335 14.25 6.75 15.0335 6.75 16L6.75 18H5.5C4.39543 18 3.5 17.1046 3.5 16V12.5C3.5 11.3954 4.39543 10.5 5.5 10.5ZM15.75 20C15.75 20.1381 15.6381 20.25 15.5 20.25H8.5C8.36193 20.25 8.25 20.1381 8.25 20L8.25 16C8.25 15.8619 8.36193 15.75 8.5 15.75L15.5 15.75C15.6381 15.75 15.75 15.8619 15.75 16V20Z" fill="#0A0A0B"/>
</svg>

    )
  };

  PrinterFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  PrinterFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default PrinterFill

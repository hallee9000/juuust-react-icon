
  import React from 'react';
  import PropTypes from 'prop-types';

  const PrintereDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M16 3.5H8C7.17157 3.5 6.5 4.17157 6.5 5V10H17.5V5C17.5 4.17157 16.8284 3.5 16 3.5Z" fill="#4400FF"/>
<path opacity="0.8" d="M6.5 9.5L17.5 9.5" stroke="#4400FF" stroke-linejoin="round"/>
<path opacity="0.8" d="M18.5 10H5.5C4.39543 10 3.5 10.8954 3.5 12V16C3.5 17.1046 4.39543 18 5.5 18H18.5C19.6046 18 20.5 17.1046 20.5 16V12C20.5 10.8954 19.6046 10 18.5 10Z" fill="#4400FF"/>
<path opacity="0.8" d="M8 20.5L16 20.5C16.2761 20.5 16.5 20.2761 16.5 20L16.5 15.5C16.5 15.2239 16.2761 15 16 15L8 15C7.72386 15 7.5 15.2239 7.5 15.5L7.5 20C7.5 20.2761 7.72386 20.5 8 20.5Z" fill="#34D399"/>
</svg>

    )
  };

  PrintereDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  PrintereDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default PrintereDuotoneF

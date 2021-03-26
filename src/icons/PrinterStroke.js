
  import React from 'react';
  import PropTypes from 'prop-types';

  const PrinterStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 10V5C17 4.44772 16.5523 4 16 4H8C7.44772 4 7 4.44772 7 5V10" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 17H5.5C4.67157 17 4 16.3284 4 15.5V11.5C4 10.6716 4.67157 10 5.5 10H18.5C19.3284 10 20 10.6716 20 11.5V15.5C20 16.3284 19.3284 17 18.5 17H17" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 20L16 20C16.5523 20 17 19.5523 17 19L17 15C17 14.4477 16.5523 14 16 14L8 14C7.44771 14 7 14.4477 7 15L7 19C7 19.5523 7.44771 20 8 20Z" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  PrinterStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  PrinterStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default PrinterStroke

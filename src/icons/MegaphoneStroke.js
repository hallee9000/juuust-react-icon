
  import React from 'react';
  import PropTypes from 'prop-types';

  const MegaphoneStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 13.9999C18.6569 13.9999 20 12.6568 20 10.9999C20 9.34308 18.6569 7.99994 17 7.99994" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 10.9999C4 8.7908 5.79086 6.99994 8 6.99994H11L17 3.99994V17.9999L11 14.9999H8C5.79086 14.9999 4 13.2091 4 10.9999V10.9999Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 14.9999H10L11 19.9999H8L7 14.9999Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MegaphoneStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MegaphoneStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MegaphoneStroke

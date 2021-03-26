
  import React from 'react';
  import PropTypes from 'prop-types';

  const ThumbsUpStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16L4 16" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="4" y="9.5" width="4" height="10" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5502 4.03972L8 9.5V19.5H17.8604C18.8138 19.5 19.6346 18.8271 19.8216 17.8922L20.7823 13.0883C21.1536 11.232 19.7337 9.5 17.8406 9.5H14.5L15.2089 5.2466C15.3613 4.3323 14.6562 3.5 13.7293 3.5H13.7026C13.2574 3.5 12.8352 3.69773 12.5502 4.03972Z" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  ThumbsUpStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ThumbsUpStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ThumbsUpStroke

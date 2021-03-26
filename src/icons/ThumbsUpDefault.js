
  import React from 'react';
  import PropTypes from 'prop-types';

  const ThumbsUpDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5502 4.03972L8 9.5H4V19.5H17.8604C18.8138 19.5 19.6346 18.8271 19.8216 17.8922L20.7823 13.0883C21.1536 11.232 19.7337 9.5 17.8406 9.5H14.5L15.2089 5.2466C15.3613 4.3323 14.6562 3.5 13.7293 3.5H13.7026C13.2574 3.5 12.8352 3.69773 12.5502 4.03972Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M8 16L4 16" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect opacity="0.8" x="4" y="9.5" width="4" height="10" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M8 9.5L12.5502 4.03972C12.8352 3.69773 13.2574 3.5 13.7026 3.5H13.7293C14.6562 3.5 15.3613 4.3323 15.2089 5.2466L14.5 9.5H17.8406C19.7337 9.5 21.1536 11.232 20.7823 13.0883L19.8216 17.8922C19.6346 18.8271 18.8138 19.5 17.8604 19.5H8" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  ThumbsUpDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ThumbsUpDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ThumbsUpDefault
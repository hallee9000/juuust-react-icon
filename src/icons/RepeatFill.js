
  import React from 'react';
  import PropTypes from 'prop-types';

  const RepeatFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 17.5H15.75C17.9591 17.5 19.75 15.7091 19.75 13.5V6.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 20L8.75 17.5L11.25 15" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.25 16.5V9.5C4.25 7.29086 6.04086 5.5 8.25 5.5L15.25 5.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.75 3L15.25 5.5L12.75 8" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  RepeatFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  RepeatFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default RepeatFill

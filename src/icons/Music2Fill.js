
  import React from 'react';
  import PropTypes from 'prop-types';

  const Music2Fill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 16.5C12.75 17.8807 11.6307 19 10.25 19C8.86929 19 7.75 17.8807 7.75 16.5C7.75 15.1193 8.86929 14 10.25 14C11.6307 14 12.75 15.1193 12.75 16.5Z" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 16.5V6.5L15 6" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  Music2Fill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  Music2Fill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default Music2Fill


  import React from 'react';
  import PropTypes from 'prop-types';

  const TabletStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19L5 5Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.75 17.5C12.75 17.9142 12.4142 18.25 12 18.25C11.5858 18.25 11.25 17.9142 11.25 17.5C11.25 17.0858 11.5858 16.75 12 16.75C12.4142 16.75 12.75 17.0858 12.75 17.5Z" fill="currentcolor"/>
</svg>

    )
  };

  TabletStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TabletStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TabletStroke

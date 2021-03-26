
  import React from 'react';
  import PropTypes from 'prop-types';

  const ThumbsDownFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.75049 16.2L8.75049 8L8.75049 4H17.914C19.1223 4 20.1576 4.86406 20.3737 6.05279L21.2503 10.8739C21.6409 13.0223 19.9904 15 17.8067 15H15.0005L15.618 18.7049C15.8182 19.9063 14.8917 21 13.6737 21C13.0887 21 12.534 20.7402 12.1595 20.2908L8.75049 16.2ZM7.25049 4V7.25H3.50049V4.5C3.50049 4.22386 3.72435 4 4.00049 4H7.25049ZM7.25049 8.75V15H4.00049C3.72435 15 3.50049 14.7761 3.50049 14.5V8.75H7.25049Z" fill="currentcolor"/>
</svg>

    )
  };

  ThumbsDownFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ThumbsDownFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ThumbsDownFill

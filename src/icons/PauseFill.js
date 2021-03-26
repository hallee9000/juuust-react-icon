
  import React from 'react';
  import PropTypes from 'prop-types';

  const PauseFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5C14 4.72386 14.2239 4.5 14.5 4.5H17.5C17.7761 4.5 18 4.72386 18 5V19C18 19.2761 17.7761 19.5 17.5 19.5H14.5C14.2239 19.5 14 19.2761 14 19V5Z" fill="currentcolor"/>
<path d="M6 5C6 4.72386 6.22386 4.5 6.5 4.5H9.5C9.77614 4.5 10 4.72386 10 5V19C10 19.2761 9.77614 19.5 9.5 19.5H6.5C6.22386 19.5 6 19.2761 6 19V5Z" fill="currentcolor"/>
</svg>

    )
  };

  PauseFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  PauseFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default PauseFill

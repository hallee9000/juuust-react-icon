
  import React from 'react';
  import PropTypes from 'prop-types';

  const CollapseFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14.5L8.5 18H15.5L12 14.5Z" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9.5L8.5 6H15.5L12 9.5Z" fill="currentcolor" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CollapseFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CollapseFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CollapseFill

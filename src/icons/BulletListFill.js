
  import React from 'react';
  import PropTypes from 'prop-types';

  const BulletListFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 17H20.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="3" cy="17" r="1" fill="currentcolor"/>
<path d="M6.5 12H20.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="3" cy="12" r="1" fill="currentcolor"/>
<path d="M6.5 7H20.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="3" cy="7" r="1" fill="currentcolor"/>
</svg>

    )
  };

  BulletListFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  BulletListFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default BulletListFill

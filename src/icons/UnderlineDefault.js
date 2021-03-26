
  import React from 'react';
  import PropTypes from 'prop-types';

  const UnderlineDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 19H18" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 5V11C7 13.7614 9.23858 16 12 16V16C14.7614 16 17 13.7614 17 11V5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  UnderlineDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  UnderlineDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default UnderlineDefault

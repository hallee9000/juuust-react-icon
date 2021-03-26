
  import React from 'react';
  import PropTypes from 'prop-types';

  const ZapDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 2.75L5 14H12L11 21.25L19 10H12L13 2.75Z" fill="#EBEFFF"/>
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M13 2.75L5 14H12L11 21.25L19 10H12L13 2.75Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  ZapDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ZapDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ZapDefault

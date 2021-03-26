
  import React from 'react';
  import PropTypes from 'prop-types';

  const FunnelDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M20.5 4H3.5V8L10 15V21L14 18.5V15L20.5 8V4Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M10 14H14" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M20 4.5H4V8L10 14V20L14 17.5V14L20 8V4.5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  FunnelDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  FunnelDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default FunnelDefault
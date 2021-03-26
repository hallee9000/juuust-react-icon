
  import React from 'react';
  import PropTypes from 'prop-types';

  const ForwardDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.25 5L20.75 12L9.25 19V5Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M9.25 5L20.75 12L9.25 19V5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M5.25 5V19" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  ForwardDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ForwardDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ForwardDefault

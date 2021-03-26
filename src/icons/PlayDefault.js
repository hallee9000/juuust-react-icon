
  import React from 'react';
  import PropTypes from 'prop-types';

  const PlayDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 5L19 12L7.5 19V5Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M7.5 5L19 12L7.5 19V5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  PlayDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  PlayDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default PlayDefault


  import React from 'react';
  import PropTypes from 'prop-types';

  const PlayFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 5L19 12L7.5 19V5Z" fill="#0A0A0B" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  PlayFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  PlayFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default PlayFill

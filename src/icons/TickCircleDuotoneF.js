
  import React from 'react';
  import PropTypes from 'prop-types';

  const TickCircleDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="12" r="8.5" fill="#4400FF"/>
<path d="M8.25 12L11 14.75L15.75 10" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  TickCircleDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TickCircleDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TickCircleDuotoneF

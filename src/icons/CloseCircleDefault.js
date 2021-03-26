
  import React from 'react';
  import PropTypes from 'prop-types';

  const CloseCircleDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8.25" stroke="currentcolor" stroke-width="1.5"/>
<path d="M15 9L9 15" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9L15 15" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CloseCircleDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CloseCircleDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CloseCircleDefault

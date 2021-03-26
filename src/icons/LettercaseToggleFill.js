
  import React from 'react';
  import PropTypes from 'prop-types';

  const LettercaseToggleFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.25 15.75C9.25 17.5449 7.90685 19 6.25 19C4.59315 19 3.25 17.5449 3.25 15.75C3.25 13.9551 4.59315 12.5 6.25 12.5C7.90685 12.5 9.25 13.9551 9.25 15.75Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.25 12.5V19" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 14H19.25" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.25 19L16.75 6.5L21.25 19" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  LettercaseToggleFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  LettercaseToggleFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default LettercaseToggleFill

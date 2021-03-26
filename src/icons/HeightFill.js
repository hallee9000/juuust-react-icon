
  import React from 'react';
  import PropTypes from 'prop-types';

  const HeightFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.5L12 4.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 8L12 4.5L8.5 8" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 16L12 19.5L8.5 16" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  HeightFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  HeightFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default HeightFill

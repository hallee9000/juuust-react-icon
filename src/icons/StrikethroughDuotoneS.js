
  import React from 'react';
  import PropTypes from 'prop-types';

  const StrikethroughDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M12 11.75C16 12.75 17 14 17 15.75C17 17.5 15.25 19.25 12.25 19.25C9.25 19.25 7.5 17.5 7 16.25M16.5 7.25C16 6.25 14.5 4.5 12 4.5C9.5 4.5 7.5 6 7.5 8C7.5 8.75 7.75 9.25 7.75 9.25" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M4 11.75H20" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  StrikethroughDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  StrikethroughDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default StrikethroughDuotoneS
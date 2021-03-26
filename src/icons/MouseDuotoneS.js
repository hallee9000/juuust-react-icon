
  import React from 'react';
  import PropTypes from 'prop-types';

  const MouseDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M12 4.00012C8.68629 4.00012 6 6.68641 6 10.0001L6 14.0001C6 17.3138 8.68629 20.0001 12 20.0001V20.0001C15.3137 20.0001 18 17.3138 18 14.0001L18 10.0001C18 6.68641 15.3137 4.00012 12 4.00012V4.00012Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round"/>
<path opacity="0.8" d="M12 11.0001L12 8.00012" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MouseDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MouseDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MouseDuotoneS

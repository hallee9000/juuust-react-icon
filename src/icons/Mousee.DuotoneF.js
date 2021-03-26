
  import React from 'react';
  import PropTypes from 'prop-types';

  const MouseeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M12 3.50012C8.41015 3.50012 5.5 6.41027 5.5 10.0001L5.5 14.0001C5.5 17.59 8.41015 20.5001 12 20.5001C15.5899 20.5001 18.5 17.59 18.5 14.0001L18.5 10.0001C18.5 6.41027 15.5899 3.50012 12 3.50012Z" fill="#4400FF"/>
<path opacity="0.8" d="M12 3.50012C8.41015 3.50012 5.5 6.41027 5.5 10.0001H18.5C18.5 6.41027 15.5899 3.50012 12 3.50012Z" fill="#4400FF"/>
<path opacity="0.8" d="M12 11.0001L12 8.00012" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MouseeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MouseeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MouseeDuotoneF

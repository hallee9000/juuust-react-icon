
  import React from 'react';
  import PropTypes from 'prop-types';

  const ExpandDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M12 18.5L8.5 15H15.5L12 18.5Z" fill="#34D399" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M12 5.5L8.5 9H15.5L12 5.5Z" fill="#4400FF" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  ExpandDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ExpandDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ExpandDuotoneF

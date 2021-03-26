
  import React from 'react';
  import PropTypes from 'prop-types';

  const DoubleRightDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M13.5 17L18.5 12L13.5 7" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6.5 17L11.5 12L6.5 7" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  DoubleRightDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DoubleRightDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DoubleRightDuotoneS

  import React from 'react';
  import PropTypes from 'prop-types';

  const DoubleLeftDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M17.5 17L12.5 12L17.5 7" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M10.5 17L5.5 12L10.5 7" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  DoubleLeftDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DoubleLeftDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DoubleLeftDuotoneF
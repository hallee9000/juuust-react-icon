
  import React from 'react';
  import PropTypes from 'prop-types';

  const BasicLeftDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M19 12L5 12" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M12 19L5 12L12 5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  BasicLeftDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  BasicLeftDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default BasicLeftDuotoneF

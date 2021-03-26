
  import React from 'react';
  import PropTypes from 'prop-types';

  const BasicRightDownDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M7 7L17 17" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M7 17H17V7" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  BasicRightDownDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  BasicRightDownDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default BasicRightDownDuotoneF

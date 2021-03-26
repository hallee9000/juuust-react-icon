
  import React from 'react';
  import PropTypes from 'prop-types';

  const ChevronUpDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M12.25 8L18.25 14" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M12.25 8L6.25 14" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  ChevronUpDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ChevronUpDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ChevronUpDuotoneF

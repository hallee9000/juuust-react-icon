
  import React from 'react';
  import PropTypes from 'prop-types';

  const UndoDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M3.5 7.5H14C17.5899 7.5 20.5 10.4101 20.5 14V14C20.5 17.5899 17.5899 20.5 14 20.5H12" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M8 12L3.5 7.5L8 3" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  UndoDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  UndoDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default UndoDuotoneS

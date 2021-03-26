
  import React from 'react';
  import PropTypes from 'prop-types';

  const LaptopDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M18 5.5H6C5.17157 5.5 4.5 6.17157 4.5 7V15C4.5 15.8284 5.17157 16.5 6 16.5H18C18.8284 16.5 19.5 15.8284 19.5 15V7C19.5 6.17157 18.8284 5.5 18 5.5Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M18 5.5H6C5.17157 5.5 4.5 6.17157 4.5 7V15C4.5 15.8284 5.17157 16.5 6 16.5H18C18.8284 16.5 19.5 15.8284 19.5 15V7C19.5 6.17157 18.8284 5.5 18 5.5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round"/>
<path opacity="0.8" d="M3.5 19L20.5 19" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="7.75" r="0.5" fill="#34D399"/>
</svg>

    )
  };

  LaptopDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  LaptopDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default LaptopDefault

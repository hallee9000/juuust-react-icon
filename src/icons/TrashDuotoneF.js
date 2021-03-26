
  import React from 'react';
  import PropTypes from 'prop-types';

  const TrashDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M20 6L4 6" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M5.5 5.25H18.5V18C18.5 18.8284 17.8284 19.5 17 19.5H7C6.17157 19.5 5.5 18.8284 5.5 18V5.25Z" fill="#4400FF"/>
<path opacity="0.8" d="M13 3.5H11C10.1716 3.5 9.5 4.17157 9.5 5V6H14.5V5C14.5 4.17157 13.8284 3.5 13 3.5Z" fill="#4400FF"/>
<path opacity="0.8" d="M10 15.5V10" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M14 15.5V10" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  TrashDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TrashDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TrashDuotoneF

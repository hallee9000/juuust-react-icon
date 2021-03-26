
  import React from 'react';
  import PropTypes from 'prop-types';

  const UnlockeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M8.25 9V7.75C8.25 5.67893 9.92893 4 12 4C13.2267 4 14.25 4.5 15 5.49963" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M4 11C4 9.89543 4.89543 9 6 9H18C19.1046 9 20 9.89543 20 11V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V11Z" fill="#4400FF"/>
<path opacity="0.8" d="M4.5 11C4.5 10.1716 5.17157 9.5 6 9.5H18C18.8284 9.5 19.5 10.1716 19.5 11V18C19.5 18.8284 18.8284 19.5 18 19.5H6C5.17157 19.5 4.5 18.8284 4.5 18V11Z" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
<circle opacity="0.8" cx="12" cy="14.5" r="1.25" fill="#34D399"/>
</svg>

    )
  };

  UnlockeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  UnlockeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default UnlockeDuotoneF

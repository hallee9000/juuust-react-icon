
  import React from 'react';
  import PropTypes from 'prop-types';

  const DesktopeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M3 5.5C3 4.67157 3.67157 4 4.5 4L19.5 4C20.3284 4 21 4.67157 21 5.5V15.5C21 16.3284 20.3284 17 19.5 17H4.5C3.67157 17 3 16.3284 3 15.5V5.5Z" fill="#4400FF"/>
<path opacity="0.8" d="M3 13L21 13" stroke="#34D399" stroke-linejoin="round"/>
<path opacity="0.8" d="M10 19.5H14" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M21 13.5L3 13.5L3 15.5C3 16.3284 3.67157 17 4.5 17L19.5 17C20.3284 17 21 16.3284 21 15.5L21 13.5Z" fill="#4400FF"/>
<circle opacity="0.8" cx="12" cy="15.25" r="0.5" fill="#34D399"/>
<path opacity="0.8" d="M11 17H13V20H11V17Z" fill="#4400FF"/>
</svg>

    )
  };

  DesktopeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DesktopeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DesktopeDuotoneF


  import React from 'react';
  import PropTypes from 'prop-types';

  const BotsAutomationeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C11.7239 3.5 11.5 3.72386 11.5 4V8H6C4.34315 8 3 9.34315 3 11V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17V11C21 9.34315 19.6569 8 18 8H12.5V4C12.5 3.72386 12.2761 3.5 12 3.5Z" fill="#4400FF"/>
<rect opacity="0.8" x="5" y="10" width="14" height="8" rx="1.5" fill="#4400FF"/>
<circle opacity="0.8" cx="8.5" cy="14" r="2" fill="#34D399"/>
<circle opacity="0.8" cx="15.5" cy="14" r="2" fill="#34D399"/>
<circle opacity="0.8" cx="12" cy="4" r="2" fill="#34D399"/>
</svg>

    )
  };

  BotsAutomationeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  BotsAutomationeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default BotsAutomationeDuotoneF

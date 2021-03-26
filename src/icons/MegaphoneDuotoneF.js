
  import React from 'react';
  import PropTypes from 'prop-types';

  const MegaphoneDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M20.75 11.25C20.75 9.47742 19.597 7.97411 18 7.44922V15.0508C19.597 14.5259 20.75 13.0226 20.75 11.25Z" fill="#34D399"/>
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M17.2764 19.1382C17.6088 19.3044 18 19.0627 18 18.691V3.30899C18 2.9373 17.6088 2.69556 17.2764 2.86178L11.0528 5.97358C11.0181 5.99094 10.9798 5.99998 10.941 5.99998H8C5.23858 5.99998 3 8.23855 3 11C3 13.2061 4.42873 15.0785 6.41138 15.7423L7.41439 20.3562C7.46436 20.586 7.66777 20.75 7.90298 20.75H11.3796C11.6986 20.75 11.936 20.4554 11.8682 20.1438L10.9677 16.0014C10.9973 16.0046 11.0261 16.013 11.0528 16.0264L17.2764 19.1382Z" fill="#4400FF"/>
<path opacity="0.8" d="M18 3.30902V18.691C18 19.0627 17.6088 19.3044 17.2764 19.1382L11.1382 16.0691C11.0535 16.0268 11 15.9402 11 15.8455V6.15451C11 6.05982 11.0535 5.97325 11.1382 5.9309L17.2764 2.8618C17.6088 2.69558 18 2.93733 18 3.30902Z" fill="#4400FF"/>
</svg>

    )
  };

  MegaphoneDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MegaphoneDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MegaphoneDuotoneF

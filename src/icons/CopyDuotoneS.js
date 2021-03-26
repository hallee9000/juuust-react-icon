
  import React from 'react';
  import PropTypes from 'prop-types';

  const CopyDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M14.75 9.5H19C19.5523 9.5 20 9.94772 20 10.5V19C20 19.5523 19.5523 20 19 20H10.5C9.94772 20 9.5 19.5523 9.5 19V14.75" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M4 5C4 4.44772 4.44772 4 5 4H13.5C14.0523 4 14.5 4.44772 14.5 5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H5C4.44772 14.5 4 14.0523 4 13.5V5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CopyDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CopyDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CopyDuotoneS


  import React from 'react';
  import PropTypes from 'prop-types';

  const CloseCircleDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="12" r="8.25" stroke="#4400FF" stroke-width="1.5"/>
<path opacity="0.8" d="M15 9L9 15" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M9 9L15 15" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CloseCircleDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CloseCircleDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CloseCircleDuotoneS

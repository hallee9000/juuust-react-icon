
  import React from 'react';
  import PropTypes from 'prop-types';

  const DoubleRightFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 17L18.5 12L13.5 7" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 17L11.5 12L6.5 7" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  DoubleRightFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DoubleRightFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DoubleRightFill

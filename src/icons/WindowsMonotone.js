
  import React from 'react';
  import PropTypes from 'prop-types';

  const WindowsMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 4V11.25H11.75V5.03L20 4ZM4 18V12.75H10.25V18.78L4 18ZM11.75 18.97L20 20V12.75H11.75V18.97ZM4 5.99997L10.25 5.21997V11.25H4V5.99997Z" fill="currentcolor"/>
</svg>

    )
  };

  WindowsMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  WindowsMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default WindowsMonotone
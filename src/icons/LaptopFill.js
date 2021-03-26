
  import React from 'react';
  import PropTypes from 'prop-types';

  const LaptopFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.25 5H5.75C4.7835 5 4 5.7835 4 6.75V15.25C4 16.2165 4.7835 17 5.75 17H18.25C19.2165 17 20 16.2165 20 15.25V6.75C20 5.7835 19.2165 5 18.25 5ZM2.75 19C2.75 18.5858 3.08579 18.25 3.5 18.25L20.5 18.25C20.9142 18.25 21.25 18.5858 21.25 19C21.25 19.4142 20.9142 19.75 20.5 19.75L3.5 19.75C3.08579 19.75 2.75 19.4142 2.75 19ZM12 8.25C12.2761 8.25 12.5 8.02614 12.5 7.75C12.5 7.47386 12.2761 7.25 12 7.25C11.7239 7.25 11.5 7.47386 11.5 7.75C11.5 8.02614 11.7239 8.25 12 8.25Z" fill="currentcolor"/>
</svg>

    )
  };

  LaptopFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  LaptopFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default LaptopFill

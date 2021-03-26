
  import React from 'react';
  import PropTypes from 'prop-types';

  const EyeFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.7101 11.5902C2.56994 11.8491 2.56994 12.151 2.7101 12.4099C3.52104 13.9081 6.66937 19 11.9999 19C17.3305 19 20.4788 13.9081 21.2897 12.4099C21.4298 12.151 21.4298 11.8491 21.2897 11.5902C20.4788 10.092 17.3305 5 11.9999 5C6.66937 5 3.52103 10.092 2.7101 11.5902ZM12 8C9.79083 8 7.99997 9.79086 7.99997 12C7.99997 14.2091 9.79083 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM9.49997 12C9.49997 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.49997 13.3807 9.49997 12Z" fill="#0A0A0B"/>
</svg>

    )
  };

  EyeFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  EyeFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default EyeFill

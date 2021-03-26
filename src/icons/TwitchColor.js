
  import React from 'react';
  import PropTypes from 'prop-types';

  const TwitchColor = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6984 13.0111L15.4187 15.2906H11.8377L9.88414 17.2438V15.2906H6.95389V5.84859H17.6984V13.0111ZM5.65107 4.54628L5 7.15107V18.8717H7.93058V20.5H9.55801L11.1865 18.8717H13.7907L19 13.6631V4.54628H5.65107Z" fill="#6441A5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5352 12.3604H11.8375V8.45277H10.5352V12.3604ZM14.1163 12.3604H15.4186V8.45277H14.1163V12.3604Z" fill="#6441A5"/>
</svg>

    )
  };

  TwitchColor.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TwitchColor.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TwitchColor

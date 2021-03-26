
  import React from 'react';
  import PropTypes from 'prop-types';

  const TwitchMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4187 15.2906L17.6984 13.0111V5.84859H6.95389V15.2906H9.88414V17.2438L11.8377 15.2906H15.4187ZM5 7.15107L5.65107 4.54628H19V13.6631L13.7907 18.8717H11.1865L9.55801 20.5H7.93058V18.8717H5V7.15107ZM11.8375 12.3604H10.5352V8.45274H11.8375V12.3604ZM15.4186 12.3604H14.1163V8.45274H15.4186V12.3604Z" fill="#0A0A0B"/>
</svg>

    )
  };

  TwitchMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TwitchMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TwitchMonotone

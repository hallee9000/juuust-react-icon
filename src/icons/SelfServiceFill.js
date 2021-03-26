
  import React from 'react';
  import PropTypes from 'prop-types';

  const SelfServiceFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0002 13H19.2003C19.6457 13 19.8688 13.5386 19.5538 13.8535L13.8538 19.5537C13.5388 19.8687 13.0002 19.6456 13.0002 19.2002V14C13.0002 13.4477 13.448 13 14.0002 13ZM17.4534 15.9568L15.9569 17.4533L18.1692 19.6657C18.5825 20.079 19.2525 20.079 19.6657 19.6657C20.079 19.2525 20.079 18.5825 19.6657 18.1692L17.4534 15.9568Z" fill="#0A0A0B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.50021 4C4.67178 4 4.00021 4.67157 4.00021 5.5V9.5C4.00021 10.3284 4.67178 11 5.50021 11H18.5002C19.3286 11 20.0002 10.3284 20.0002 9.5V5.5C20.0002 4.67157 19.3286 4 18.5002 4H5.50021ZM5.49969 13C4.67127 13 3.99969 13.6715 3.99969 14.5V18.5C3.99969 19.3284 4.67127 20 5.49969 20H9.49969C10.3281 20 10.9997 19.3284 10.9997 18.5V14.5C10.9997 13.6715 10.3281 13 9.49969 13H5.49969Z" fill="#0A0A0B"/>
</svg>

    )
  };

  SelfServiceFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  SelfServiceFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default SelfServiceFill

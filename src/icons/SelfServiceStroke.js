
  import React from 'react';
  import PropTypes from 'prop-types';

  const SelfServiceStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0002 13H19.2003C19.6457 13 19.8688 13.5386 19.5538 13.8535L13.8538 19.5537C13.5388 19.8687 13.0002 19.6456 13.0002 19.2002V14C13.0002 13.4477 13.448 13 14.0002 13ZM17.4534 15.9568L15.9569 17.4533L18.1692 19.6657C18.5825 20.079 19.2525 20.079 19.6657 19.6657C20.079 19.2525 20.079 18.5825 19.6657 18.1692L17.4534 15.9568Z" fill="currentcolor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.50006 3.75C4.53356 3.75 3.75006 4.5335 3.75006 5.5V9.5C3.75006 10.4665 4.53356 11.25 5.50006 11.25H18.5001C19.4666 11.25 20.2501 10.4665 20.2501 9.5V5.5C20.2501 4.5335 19.4666 3.75 18.5001 3.75H5.50006ZM5.25006 5.5C5.25006 5.36193 5.36199 5.25 5.50006 5.25H18.5001C18.6381 5.25 18.7501 5.36193 18.7501 5.5V9.5C18.7501 9.63807 18.6381 9.75 18.5001 9.75H5.50006C5.36199 9.75 5.25006 9.63807 5.25006 9.5V5.5ZM5.50006 12.75C4.53356 12.75 3.75006 13.5335 3.75006 14.5V18.5C3.75006 19.4665 4.53356 20.25 5.50006 20.25H9.50006C10.4666 20.25 11.2501 19.4665 11.2501 18.5V14.5C11.2501 13.5335 10.4666 12.75 9.50006 12.75H5.50006ZM5.25006 14.5C5.25006 14.3619 5.36199 14.25 5.50006 14.25H9.50006C9.63813 14.25 9.75006 14.3619 9.75006 14.5V18.5C9.75006 18.6381 9.63813 18.75 9.50006 18.75H5.50006C5.36199 18.75 5.25006 18.6381 5.25006 18.5V14.5Z" fill="currentcolor"/>
</svg>

    )
  };

  SelfServiceStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  SelfServiceStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default SelfServiceStroke
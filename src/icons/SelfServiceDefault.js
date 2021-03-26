
  import React from 'react';
  import PropTypes from 'prop-types';

  const SelfServiceDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="16" height="7" rx="1.5" fill="#EBEFFF"/>
<rect x="4" y="13" width="7" height="7" rx="1.5" fill="#EBEFFF"/>
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M5.49994 3.75C4.53344 3.75 3.74994 4.5335 3.74994 5.5V9.5C3.74994 10.4665 4.53344 11.25 5.49994 11.25H18.4999C19.4664 11.25 20.2499 10.4665 20.2499 9.5V5.5C20.2499 4.5335 19.4664 3.75 18.4999 3.75H5.49994ZM5.24994 5.5C5.24994 5.36193 5.36187 5.25 5.49994 5.25H18.4999C18.638 5.25 18.7499 5.36193 18.7499 5.5V9.5C18.7499 9.63807 18.638 9.75 18.4999 9.75H5.49994C5.36187 9.75 5.24994 9.63807 5.24994 9.5V5.5ZM5.49994 12.75C4.53344 12.75 3.74994 13.5335 3.74994 14.5V18.5C3.74994 19.4665 4.53344 20.25 5.49994 20.25H9.49994C10.4664 20.25 11.2499 19.4665 11.2499 18.5V14.5C11.2499 13.5335 10.4664 12.75 9.49994 12.75H5.49994ZM5.24994 14.5C5.24994 14.3619 5.36187 14.25 5.49994 14.25H9.49994C9.63801 14.25 9.74994 14.3619 9.74994 14.5V18.5C9.74994 18.6381 9.63801 18.75 9.49994 18.75H5.49994C5.36187 18.75 5.24994 18.6381 5.24994 18.5V14.5Z" fill="#4400FF"/>
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M14.0002 13H19.2003C19.6457 13 19.8688 13.5386 19.5538 13.8535L13.8538 19.5537C13.5388 19.8687 13.0002 19.6456 13.0002 19.2002V14C13.0002 13.4477 13.448 13 14.0002 13ZM17.4534 15.9568L15.9569 17.4533L18.1692 19.6657C18.5825 20.079 19.2525 20.079 19.6657 19.6657C20.079 19.2525 20.079 18.5825 19.6657 18.1692L17.4534 15.9568Z" fill="#34D399"/>
</svg>

    )
  };

  SelfServiceDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  SelfServiceDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default SelfServiceDefault


  import React from 'react';
  import PropTypes from 'prop-types';

  const TickCircleFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM16.2803 10.5303C16.5732 10.2374 16.5732 9.76256 16.2803 9.46967C15.9874 9.17678 15.5126 9.17678 15.2197 9.46967L11 13.6893L8.78033 11.4697C8.48744 11.1768 8.01256 11.1768 7.71967 11.4697C7.42678 11.7626 7.42678 12.2374 7.71967 12.5303L10.4697 15.2803C10.6103 15.421 10.8011 15.5 11 15.5C11.1989 15.5 11.3897 15.421 11.5303 15.2803L16.2803 10.5303Z" fill="#0A0A0B"/>
</svg>

    )
  };

  TickCircleFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TickCircleFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TickCircleFill

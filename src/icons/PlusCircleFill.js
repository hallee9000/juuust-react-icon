
  import React from 'react';
  import PropTypes from 'prop-types';

  const PlusCircleFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25V11.25H15.75C16.1642 11.25 16.5 11.5858 16.5 12C16.5 12.4142 16.1642 12.75 15.75 12.75H12.75V15.75C12.75 16.1642 12.4142 16.5 12 16.5C11.5858 16.5 11.25 16.1642 11.25 15.75V12.75H8.25C7.83579 12.75 7.5 12.4142 7.5 12C7.5 11.5858 7.83579 11.25 8.25 11.25H11.25V8.25C11.25 7.83579 11.5858 7.5 12 7.5Z" fill="#0A0A0B"/>
</svg>

    )
  };

  PlusCircleFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  PlusCircleFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default PlusCircleFill

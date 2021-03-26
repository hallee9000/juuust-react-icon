
  import React from 'react';
  import PropTypes from 'prop-types';

  const EditFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0303 5.96967L15.5 4.5C16.6046 3.39543 18.3954 3.39543 19.5 4.5C20.6046 5.60456 20.6046 7.39543 19.5 8.5L18.0303 9.96966L14.0303 5.96967ZM12.9697 7.03033L4 16V20H8L16.9697 11.0303L12.9697 7.03033Z" fill="currentcolor"/>
</svg>

    )
  };

  EditFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  EditFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default EditFill

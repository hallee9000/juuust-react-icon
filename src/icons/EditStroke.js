
  import React from 'react';
  import PropTypes from 'prop-types';

  const EditStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 6.5L17.5 10.5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5.00003L4.50003 15.5L4.5 19.5H8.50003L19 9.00001C20.1046 7.89544 20.1046 6.10457 19 5.00001C17.8954 3.89546 16.1046 3.89548 15 5.00003Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  EditStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  EditStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default EditStroke

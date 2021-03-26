
  import React from 'react';
  import PropTypes from 'prop-types';

  const MegaphoneDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10.9999C4 8.7908 5.79086 6.99994 8 6.99994H11L17 3.99994V7.99994C18.6569 7.99994 20 9.34308 20 10.9999C20 12.6568 18.6569 13.9999 17 13.9999V17.9999L11 14.9999H10L11 19.9999H8L7 14.9999H8C5.79086 14.9999 4 13.2091 4 10.9999Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M17 13.9999C18.6569 13.9999 20 12.6568 20 10.9999C20 9.34308 18.6569 7.99994 17 7.99994" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M4 10.9999C4 8.7908 5.79086 6.99994 8 6.99994H11L17 3.99994V17.9999L11 14.9999H8C5.79086 14.9999 4 13.2091 4 10.9999V10.9999Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M7 14.9999L8 19.9999H11L10 14.9999" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MegaphoneDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MegaphoneDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MegaphoneDefault
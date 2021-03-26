
  import React from 'react';
  import PropTypes from 'prop-types';

  const RejectDuplicateDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 20C19.5523 20 20 19.5523 20 19V10.5C20 9.94772 19.5523 9.5 19 9.5H14.5V5C14.5 4.44772 14.0523 4 13.5 4H5C4.44772 4 4 4.44771 4 5V13.5C4 14.0523 4.44771 14.5 5 14.5H9.5V19C9.5 19.5523 9.94771 20 10.5 20H19Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M9.25 14.5H5C4.44772 14.5 4 14.0523 4 13.5V5C4 4.44772 4.44772 4 5 4H13.5C14.0523 4 14.5 4.44772 14.5 5V9.25" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M20 19C20 19.5523 19.5523 20 19 20H10.5C9.94772 20 9.5 19.5523 9.5 19V10.5C9.5 9.94772 9.94772 9.5 10.5 9.5H19C19.5523 9.5 20 9.94772 20 10.5V19Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.8">
<path d="M16.75 12.75L12.75 16.75" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.75 12.75L16.75 16.75" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

    )
  };

  RejectDuplicateDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  RejectDuplicateDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default RejectDuplicateDefault


  import React from 'react';
  import PropTypes from 'prop-types';

  const TrashStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L4 6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15V10" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 15V10" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6H18V18C18 18.5523 17.5523 19 17 19H7C6.44772 19 6 18.5523 6 18L6 6Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 6V5C14 4.44772 13.5523 4 13 4H11C10.4477 4 10 4.44772 10 5V6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  TrashStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TrashStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TrashStroke


  import React from 'react';
  import PropTypes from 'prop-types';

  const HeadphoneStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 15.5V12.75C3.75 8.19365 7.44365 4.5 12 4.5C16.5563 4.5 20.25 8.19365 20.25 12.75V15.5" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 14C16.25 12.8954 17.1454 12 18.25 12V12C19.3546 12 20.25 12.8954 20.25 14V17C20.25 18.1046 19.3546 19 18.25 19V19C17.1454 19 16.25 18.1046 16.25 17V14Z" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 14C3.75 12.8954 4.64543 12 5.75 12V12C6.85457 12 7.75 12.8954 7.75 14V17C7.75 18.1046 6.85457 19 5.75 19V19C4.64543 19 3.75 18.1046 3.75 17V14Z" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  HeadphoneStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  HeadphoneStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default HeadphoneStroke


  import React from 'react';
  import PropTypes from 'prop-types';

  const HappyFaceStroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 14.75C8.75 14.75 9.96875 16.25 12 16.25C14.0312 16.25 15.25 14.75 15.25 14.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.25 10.75C10.25 10.1977 9.80228 9.75 9.25 9.75C8.69772 9.75 8.25 10.1977 8.25 10.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.75 10.75C15.75 10.1977 15.3023 9.75 14.75 9.75C14.1977 9.75 13.75 10.1977 13.75 10.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  HappyFaceStroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  HappyFaceStroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default HappyFaceStroke

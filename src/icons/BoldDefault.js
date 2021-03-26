
  import React from 'react';
  import PropTypes from 'prop-types';

  const BoldDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H12.75C14.5449 5 16 6.45507 16 8.25V8.25C16 10.0449 14.5449 11.5 12.75 11.5H7V5Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 11.5H13.75C15.8211 11.5 17.5 13.1789 17.5 15.25V15.25C17.5 17.3211 15.8211 19 13.75 19H7L7 11.5Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  BoldDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  BoldDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default BoldDefault

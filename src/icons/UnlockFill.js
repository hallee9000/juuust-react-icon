
  import React from 'react';
  import PropTypes from 'prop-types';

  const UnlockFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 7.75C7.25 5.12665 9.37665 3 12 3C13.538 3 14.859 3.6454 15.7999 4.89949C16.1313 5.34126 16.0419 5.96808 15.6001 6.29953C15.1584 6.63098 14.5316 6.54154 14.2001 6.09977C13.641 5.3546 12.9154 5 12 5C10.4812 5 9.25 6.23122 9.25 7.75V9H18C19.1046 9 20 9.89543 20 11V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V11C4 9.89543 4.89543 9 6 9H7.25V7.75ZM12 15.75C12.6904 15.75 13.25 15.1904 13.25 14.5C13.25 13.8096 12.6904 13.25 12 13.25C11.3096 13.25 10.75 13.8096 10.75 14.5C10.75 15.1904 11.3096 15.75 12 15.75Z" fill="currentcolor"/>
</svg>

    )
  };

  UnlockFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  UnlockFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default UnlockFill

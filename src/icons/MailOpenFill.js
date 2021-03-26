
  import React from 'react';
  import PropTypes from 'prop-types';

  const MailOpenFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.54758 8.4259L11.693 14.7612C11.8736 14.9017 12.1264 14.9017 12.307 14.7612L20.4524 8.4259C20.7218 8.21637 20.7068 7.8045 20.4228 7.6152L12.2774 2.1849C12.1094 2.07293 11.8906 2.07293 11.7226 2.1849L3.5772 7.6152C3.29324 7.8045 3.27819 8.21637 3.54758 8.4259Z" fill="currentcolor"/>
<path d="M21 20V10L12.307 16.7612C12.1264 16.9017 11.8736 16.9017 11.693 16.7612L3 10V20C3 20.2761 3.22386 20.5 3.5 20.5H20.5C20.7761 20.5 21 20.2761 21 20Z" fill="currentcolor"/>
</svg>

    )
  };

  MailOpenFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MailOpenFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MailOpenFill

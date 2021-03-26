
  import React from 'react';
  import PropTypes from 'prop-types';

  const MailOpeneDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M21 20V8L12.2774 2.1849C12.1094 2.07293 11.8906 2.07293 11.7226 2.1849L3 8V20C3 20.2761 3.22386 20.5 3.5 20.5H20.5C20.7761 20.5 21 20.2761 21 20Z" fill="#4400FF"/>
<path opacity="0.8" d="M3 8L11.693 14.7612C11.8736 14.9017 12.1264 14.9017 12.307 14.7612L21 8L12.2774 2.1849C12.1094 2.07293 11.8906 2.07293 11.7226 2.1849L3 8Z" fill="#34D399"/>
<path opacity="0.8" d="M6 17.5L8.5 15M18 17.5L15.5 15" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MailOpeneDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MailOpeneDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MailOpeneDuotoneF

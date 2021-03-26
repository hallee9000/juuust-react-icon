
  import React from 'react';
  import PropTypes from 'prop-types';

  const MailFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.05081 6.11147C3.01767 6.23539 3 6.36563 3 6.5V17.5C3 18.3284 3.67157 19 4.5 19H19.5C20.3284 19 21 18.3284 21 17.5V6.5C21 6.36563 20.9823 6.23539 20.9492 6.11147L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L3.05081 6.11147ZM19.8885 5.05081C19.7646 5.01767 19.6344 5 19.5 5H4.5C4.36563 5 4.23539 5.01767 4.11147 5.05081L12 12.9393L19.8885 5.05081Z" fill="currentcolor"/>
</svg>

    )
  };

  MailFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MailFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MailFill

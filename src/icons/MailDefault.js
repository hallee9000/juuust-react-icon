
  import React from 'react';
  import PropTypes from 'prop-types';

  const MailDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M3.5 6C3.5 5.44772 3.94772 5 4.5 5H19.5C20.0523 5 20.5 5.44772 20.5 6V17.5C20.5 18.0523 20.0523 18.5 19.5 18.5H4.5C3.94772 18.5 3.5 18.0523 3.5 17.5V6Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M20 6L12 14L4 6" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M3.5 6.5C3.5 5.94772 3.94772 5.5 4.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V17.5C20.5 18.0523 20.0523 18.5 19.5 18.5H4.5C3.94772 18.5 3.5 18.0523 3.5 17.5V6.5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MailDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MailDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MailDefault

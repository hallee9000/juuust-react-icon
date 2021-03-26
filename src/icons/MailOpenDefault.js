
  import React from 'react';
  import PropTypes from 'prop-types';

  const MailOpenDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M3.5 9.01816C3.5 8.69323 3.65787 8.38857 3.92332 8.20119L12 2.5L20.0767 8.20119C20.3421 8.38857 20.5 8.69323 20.5 9.01816V19C20.5 19.5523 20.0523 20 19.5 20H4.5C3.94772 20 3.5 19.5523 3.5 19V9.01816Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M20.5 9L12 15.5L3.5 9" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M3.5 9.01816C3.5 8.69323 3.65787 8.38857 3.92332 8.20119L12 2.5L20.0767 8.20119C20.3421 8.38857 20.5 8.69323 20.5 9.01816V19C20.5 19.5523 20.0523 20 19.5 20H4.5C3.94772 20 3.5 19.5523 3.5 19V9.01816Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MailOpenDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MailOpenDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MailOpenDefault

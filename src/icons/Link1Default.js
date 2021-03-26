
  import React from 'react';
  import PropTypes from 'prop-types';

  const Link1Default = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M14.5 7.99991H17C19.25 7.99991 21 9.74991 21 11.9999C21 14.2499 19.25 15.9999 17 15.9999H14.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M9.5 15.9999H7C4.78729 15.9999 3 14.2499 3 11.9999C3 9.74991 4.75634 7.99991 7 7.99991H9.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M8.75024 11.9999H15.2502" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  Link1Default.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  Link1Default.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default Link1Default

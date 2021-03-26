
  import React from 'react';
  import PropTypes from 'prop-types';

  const ReloadFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4867 8.748C18.7934 7.42755 16.5 4 12.25 4C7 4 4 8 4 12C4 16 7 20 12.25 20C15.6132 20 18.75 18 20 15" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 5C21 4.44772 20.5523 4 20 4C19.4477 4 19 4.44772 19 5H21ZM20 9V10C20.5523 10 21 9.55228 21 9H20ZM16 8C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10V8ZM19 5V9H21V5H19ZM20 8H16V10H20V8Z" fill="#0A0A0B"/>
</svg>

    )
  };

  ReloadFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ReloadFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ReloadFill

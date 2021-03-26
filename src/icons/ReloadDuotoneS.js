
  import React from 'react';
  import PropTypes from 'prop-types';

  const ReloadDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M19.4867 8.748C18.7934 7.42755 16.5 4 12.25 4C7 4 4 8 4 12C4 16 7 20 12.25 20C15.6132 20 18.75 18 20 15" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M20.75 5C20.75 4.58579 20.4142 4.25 20 4.25C19.5858 4.25 19.25 4.58579 19.25 5H20.75ZM20 9V9.75C20.4142 9.75 20.75 9.41421 20.75 9H20ZM16 8.25C15.5858 8.25 15.25 8.58579 15.25 9C15.25 9.41421 15.5858 9.75 16 9.75V8.25ZM19.25 5V9H20.75V5H19.25ZM20 8.25H16V9.75H20V8.25Z" fill="#34D399"/>
</svg>

    )
  };

  ReloadDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ReloadDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ReloadDuotoneS

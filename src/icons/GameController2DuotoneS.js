
  import React from 'react';
  import PropTypes from 'prop-types';

  const GameController2DuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M11.0004 15.5V14.75C10.7645 14.75 10.5424 14.861 10.4007 15.0496L11.0004 15.5ZM12.9996 15.5L13.5993 15.0496C13.4576 14.861 13.2355 14.75 12.9996 14.75V15.5ZM7 18.25C8.88167 18.25 10.5523 17.3454 11.6 15.9504L10.4007 15.0496C9.62404 16.0835 8.38996 16.75 7 16.75V18.25ZM1.25 12.5C1.25 15.6756 3.82436 18.25 7 18.25V16.75C4.65279 16.75 2.75 14.8472 2.75 12.5H1.25ZM7 6.75C3.82436 6.75 1.25 9.32436 1.25 12.5H2.75C2.75 10.1528 4.65279 8.25 7 8.25V6.75ZM7 8.25H17V6.75H7V8.25ZM22.75 12.5C22.75 9.32436 20.1756 6.75 17 6.75V8.25C19.3472 8.25 21.25 10.1528 21.25 12.5H22.75ZM17 18.25C20.1756 18.25 22.75 15.6756 22.75 12.5H21.25C21.25 14.8472 19.3472 16.75 17 16.75V18.25ZM12.4 15.9504C13.4477 17.3454 15.1183 18.25 17 18.25V16.75C15.61 16.75 14.376 16.0835 13.5993 15.0496L12.4 15.9504ZM12.9996 14.75H11.0004V16.25H12.9996V14.75Z" fill="#4400FF"/>
<circle opacity="0.8" cx="16" cy="12.25" r="0.5" fill="#34D399"/>
<circle opacity="0.8" cx="17" cy="13.25" r="0.5" fill="#34D399"/>
<circle opacity="0.8" cx="18" cy="12.25" r="0.5" fill="#34D399"/>
<circle opacity="0.8" cx="17" cy="11.25" r="0.5" fill="#34D399"/>
<path opacity="0.8" d="M7 11.25V13.25" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6 12.25H8" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  GameController2DuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  GameController2DuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default GameController2DuotoneS

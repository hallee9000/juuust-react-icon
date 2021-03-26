
  import React from 'react';
  import PropTypes from 'prop-types';

  const GameController2eDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M12.8331 16.09C12.7844 16.0335 12.714 16 12.6394 16H11.3606C11.286 16 11.2156 16.0335 11.1669 16.09C10.1583 17.2596 8.6656 18 7 18C3.96243 18 1.5 15.5376 1.5 12.5C1.5 9.46243 3.96243 7 7 7H17C20.0376 7 22.5 9.46243 22.5 12.5C22.5 15.5376 20.0376 18 17 18C15.3344 18 13.8417 17.2596 12.8331 16.09Z" fill="#4400FF"/>
<path opacity="0.8" d="M11.0004 15.5V15C10.8431 15 10.695 15.074 10.6006 15.1997L11.0004 15.5ZM12.9996 15.5L13.3994 15.1997C13.305 15.074 13.1569 15 12.9996 15V15.5ZM7 18C8.79972 18 10.3976 17.1351 11.4001 15.8003L10.6006 15.1997C9.77875 16.2938 8.47191 17 7 17V18ZM1.5 12.5C1.5 15.5376 3.96243 18 7 18V17C4.51472 17 2.5 14.9853 2.5 12.5H1.5ZM7 7C3.96243 7 1.5 9.46243 1.5 12.5H2.5C2.5 10.0147 4.51472 8 7 8V7ZM7 8H17V7H7V8ZM22.5 12.5C22.5 9.46243 20.0376 7 17 7V8C19.4853 8 21.5 10.0147 21.5 12.5H22.5ZM17 18C20.0376 18 22.5 15.5376 22.5 12.5H21.5C21.5 14.9853 19.4853 17 17 17V18ZM12.5999 15.8003C13.6024 17.1351 15.2003 18 17 18V17C15.5281 17 14.2213 16.2938 13.3994 15.1997L12.5999 15.8003ZM12.9996 15H11.0004V16H12.9996V15Z" fill="#4400FF"/>
<circle opacity="0.8" cx="16" cy="12.25" r="0.5" fill="#34D399"/>
<circle opacity="0.8" cx="17" cy="13.25" r="0.5" fill="#34D399"/>
<circle opacity="0.8" cx="18" cy="12.25" r="0.5" fill="#34D399"/>
<circle opacity="0.8" cx="17" cy="11.25" r="0.5" fill="#34D399"/>
<path opacity="0.8" d="M7 11.25V13.25" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6 12.25H8" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  GameController2eDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  GameController2eDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default GameController2eDuotoneF
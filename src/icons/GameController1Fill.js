
  import React from 'react';
  import PropTypes from 'prop-types';

  const GameController1Fill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.36075 5.5H16.6395C18.8605 5.5 20.7494 7.1205 21.0872 9.31574L21.8798 14.4678C22.206 16.588 20.5608 18.5 18.4157 18.5C17.09 18.5 15.8756 17.751 15.2827 16.5652L15.0265 16.0528C14.8571 15.714 14.5109 15.5 14.1321 15.5H9.86815C9.48938 15.5 9.14311 15.714 8.97372 16.0528L8.71749 16.5652C8.12462 17.751 6.91019 18.5 5.58449 18.5C3.43939 18.5 1.79428 16.588 2.12045 14.4678L2.91308 9.31574C3.25081 7.1205 5.13968 5.5 7.36075 5.5ZM8.50012 9.75C8.50012 9.47386 8.27626 9.25 8.00012 9.25C7.72397 9.25 7.50012 9.47386 7.50012 9.75V10.25H7.00012C6.72397 10.25 6.50012 10.4739 6.50012 10.75C6.50012 11.0261 6.72397 11.25 7.00012 11.25H7.50012V11.75C7.50012 12.0261 7.72397 12.25 8.00012 12.25C8.27626 12.25 8.50012 12.0261 8.50012 11.75V11.25H9.00012C9.27626 11.25 9.50012 11.0261 9.50012 10.75C9.50012 10.4739 9.27626 10.25 9.00012 10.25H8.50012V9.75ZM17.0001 9.75C17.0001 10.0261 16.7763 10.25 16.5001 10.25C16.224 10.25 16.0001 10.0261 16.0001 9.75C16.0001 9.47386 16.224 9.25 16.5001 9.25C16.7763 9.25 17.0001 9.47386 17.0001 9.75ZM16.0001 10.75C16.0001 11.0261 15.7763 11.25 15.5001 11.25C15.224 11.25 15.0001 11.0261 15.0001 10.75C15.0001 10.4739 15.224 10.25 15.5001 10.25C15.7763 10.25 16.0001 10.4739 16.0001 10.75ZM17.0001 11.75C17.0001 12.0261 16.7763 12.25 16.5001 12.25C16.224 12.25 16.0001 12.0261 16.0001 11.75C16.0001 11.4739 16.224 11.25 16.5001 11.25C16.7763 11.25 17.0001 11.4739 17.0001 11.75ZM17.5001 11.25C17.7763 11.25 18.0001 11.0261 18.0001 10.75C18.0001 10.4739 17.7763 10.25 17.5001 10.25C17.224 10.25 17.0001 10.4739 17.0001 10.75C17.0001 11.0261 17.224 11.25 17.5001 11.25Z" fill="#0A0A0B"/>
</svg>

    )
  };

  GameController1Fill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  GameController1Fill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default GameController1Fill

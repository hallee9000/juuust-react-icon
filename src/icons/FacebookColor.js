
  import React from 'react';
  import PropTypes from 'prop-types';

  const FacebookColor = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8.5" fill="#1977F3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3086 14.4576L15.6851 12H13.328V10.4055C13.328 9.73369 13.6567 9.07747 14.7133 9.07747H15.7856V6.9856C15.7856 6.9856 14.8126 6.81946 13.8826 6.81946C11.9414 6.81946 10.672 7.99568 10.672 10.127V12.0001H8.51318V14.4577H10.672V20.3973C11.1047 20.4654 11.5481 20.5001 12 20.5001C12.4518 20.5001 12.8953 20.4642 13.328 20.3973V14.4577H15.3086L15.3086 14.4576Z" fill="white"/>
</svg>

    )
  };

  FacebookColor.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  FacebookColor.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default FacebookColor
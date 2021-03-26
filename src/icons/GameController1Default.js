
  import React from 'react';
  import PropTypes from 'prop-types';

  const GameController1Default = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M16.6115 6H7.38851C5.43315 6 3.76439 7.41365 3.44293 9.3424L2.5822 14.5068C2.27743 16.3354 3.68756 18 5.54138 18H5.6459C6.78221 18 7.821 17.358 8.32918 16.3416L8.72361 15.5528C8.893 15.214 9.23926 15 9.61803 15H14.382C14.7607 15 15.107 15.214 15.2764 15.5528L15.6708 16.3416C16.179 17.358 17.2178 18 18.3541 18H18.4586C20.3124 18 21.7226 16.3354 21.4178 14.5068L20.5571 9.3424C20.2356 7.41365 18.5668 6 16.6115 6Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M16.6115 6H7.38851C5.43315 6 3.76439 7.41365 3.44293 9.3424L2.5822 14.5068C2.27743 16.3354 3.68756 18 5.54138 18H5.6459C6.78221 18 7.821 17.358 8.32918 16.3416L8.72361 15.5528C8.893 15.214 9.23926 15 9.61803 15H14.382C14.7607 15 15.107 15.214 15.2764 15.5528L15.6708 16.3416C16.179 17.358 17.2178 18 18.3541 18H18.4586C20.3124 18 21.7226 16.3354 21.4178 14.5068L20.5571 9.3424C20.2356 7.41365 18.5668 6 16.6115 6Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round"/>
<circle opacity="0.8" cx="15.5" cy="10.75" r="0.5" fill="#34D399"/>
<circle opacity="0.8" cx="16.5" cy="11.75" r="0.5" fill="#34D399"/>
<circle opacity="0.8" cx="17.5" cy="10.75" r="0.5" fill="#34D399"/>
<circle opacity="0.8" cx="16.5" cy="9.75" r="0.5" fill="#34D399"/>
<path opacity="0.8" d="M8 9.75V11.75" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M7 10.75H9" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  GameController1Default.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  GameController1Default.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default GameController1Default

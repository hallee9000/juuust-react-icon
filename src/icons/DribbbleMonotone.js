
  import React from 'react';
  import PropTypes from 'prop-types';

  const DribbbleMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 3.25C6.94551 3.25 3.25 6.94551 3.25 11.5C3.25 16.0545 6.94551 19.75 11.5 19.75C16.0456 19.75 19.75 16.0545 19.75 11.5C19.75 6.94551 16.0456 3.25 11.5 3.25ZM16.9493 7.05287C17.9336 8.25189 18.5241 9.782 18.542 11.4374C18.3094 11.3926 15.9829 10.9184 13.6386 11.2137C13.5849 11.0974 13.5401 10.9721 13.4865 10.8468C13.3433 10.5068 13.1822 10.1578 13.0212 9.82674C15.6161 8.77088 16.7972 7.24973 16.9493 7.05287ZM11.5 4.46692C13.2896 4.46692 14.9271 5.13801 16.1708 6.23861C16.0456 6.41757 14.9807 7.8403 12.4753 8.77983C11.321 6.65916 10.0415 4.92327 9.84464 4.65483C10.3726 4.52956 10.9273 4.46692 11.5 4.46692ZM8.50245 5.12907C8.69035 5.37961 9.94306 7.12446 11.1152 9.20038C7.8224 10.0773 4.91432 10.0594 4.60114 10.0594C5.05748 7.87609 6.5339 6.05965 8.50245 5.12907ZM4.44902 11.5089C4.44902 11.4374 4.44902 11.3658 4.44902 11.2942C4.75325 11.3031 8.17137 11.3479 11.6879 10.292C11.8937 10.6857 12.0816 11.0884 12.2606 11.4911C12.1711 11.5179 12.0727 11.5447 11.9832 11.5716C8.35033 12.7438 6.41757 15.9471 6.25651 16.2156C5.13801 14.9718 4.44902 13.3164 4.44902 11.5089ZM11.5 18.551C9.87148 18.551 8.36822 17.9962 7.17814 17.0656C7.30342 16.8061 8.7351 14.0502 12.708 12.6632C12.7259 12.6543 12.7348 12.6543 12.7527 12.6453C13.7459 15.2134 14.1486 17.3698 14.256 17.9873C13.4059 18.3541 12.4753 18.551 11.5 18.551ZM15.4282 17.343C15.3566 16.9135 14.9808 14.8555 14.0591 12.3232C16.2693 11.9742 18.202 12.5469 18.4436 12.6274C18.1394 14.587 17.0119 16.2782 15.4282 17.343Z" fill="#444444"/>
</svg>

    )
  };

  DribbbleMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DribbbleMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DribbbleMonotone

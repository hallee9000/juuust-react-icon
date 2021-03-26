
  import React from 'react';
  import PropTypes from 'prop-types';

  const DiscordMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5733 19.5C16.5733 19.5 15.9856 18.7833 15.4958 18.15C17.6345 17.5334 18.4509 16.1667 18.4509 16.1667C17.7815 16.6167 17.1447 16.9334 16.5733 17.15C15.757 17.5 14.9733 17.7334 14.206 17.8667C12.6387 18.1667 11.202 18.0833 9.97748 17.85C9.04687 17.6667 8.24688 17.4 7.5775 17.1334C7.20199 16.9834 6.79383 16.8 6.38568 16.5667C6.36119 16.55 6.3367 16.5375 6.31221 16.525C6.28772 16.5125 6.26323 16.5 6.23874 16.4834C6.20609 16.4667 6.18976 16.45 6.17343 16.4334C5.87956 16.2667 5.7163 16.15 5.7163 16.15C5.7163 16.15 6.49996 17.4834 8.57341 18.1167C8.08362 18.75 7.47954 19.5 7.47954 19.5C3.87141 19.3833 2.5 16.9667 2.5 16.9667C2.5 11.6001 4.851 7.25012 4.851 7.25012C7.20199 5.45014 9.43871 5.50014 9.43871 5.50014L9.60197 5.70014C6.66322 6.5668 5.30814 7.88345 5.30814 7.88345C5.30814 7.88345 5.66732 7.68345 6.27139 7.40012C8.01831 6.61679 9.40605 6.40013 9.97748 6.35013C9.98992 6.34801 10.0021 6.3459 10.0141 6.34381C10.0964 6.3295 10.1695 6.3168 10.255 6.3168C11.2509 6.18347 12.3775 6.15013 13.5529 6.28346C15.104 6.4668 16.7692 6.93346 18.4672 7.88345C18.4672 7.88345 17.1774 6.63346 14.4019 5.7668L14.6305 5.50014C14.6305 5.50014 16.8672 5.45014 19.2182 7.25012C19.2182 7.25012 21.5692 11.6001 21.5692 16.9667C21.5692 16.9667 20.1815 19.3833 16.5733 19.5ZM7.31641 13.5668C7.31641 12.5501 8.05109 11.7168 8.9817 11.7168C9.9123 11.7168 10.6633 12.5501 10.647 13.5668C10.647 14.5834 9.9123 15.4168 8.9817 15.4168C8.06742 15.4168 7.31641 14.5834 7.31641 13.5668ZM13.2755 13.5668C13.2755 12.5501 14.0102 11.7168 14.9408 11.7168C15.8714 11.7168 16.6061 12.5501 16.6061 13.5668C16.6061 14.5834 15.8714 15.4168 14.9408 15.4168C14.0265 15.4168 13.2755 14.5834 13.2755 13.5668Z" fill="currentcolor"/>
</svg>

    )
  };

  DiscordMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  DiscordMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default DiscordMonotone
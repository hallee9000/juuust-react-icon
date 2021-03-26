
  import React from 'react';
  import PropTypes from 'prop-types';

  const HappyFaceeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM8.875 10.75C8.875 10.5429 9.04289 10.375 9.25 10.375C9.45711 10.375 9.625 10.5429 9.625 10.75C9.625 11.0952 9.90482 11.375 10.25 11.375C10.5952 11.375 10.875 11.0952 10.875 10.75C10.875 9.85254 10.1475 9.125 9.25 9.125C8.35254 9.125 7.625 9.85254 7.625 10.75C7.625 11.0952 7.90482 11.375 8.25 11.375C8.59518 11.375 8.875 11.0952 8.875 10.75ZM8.27708 14.1679C8.59754 13.9076 9.06792 13.9553 9.32962 14.274L9.33351 14.2786C9.33842 14.2843 9.34771 14.295 9.36128 14.3099C9.38845 14.3398 9.43247 14.3864 9.49249 14.4442C9.61307 14.5604 9.79498 14.7187 10.0313 14.8773C10.5058 15.1958 11.1746 15.5 12 15.5C12.8254 15.5 13.4943 15.1958 13.9687 14.8773C14.2051 14.7187 14.387 14.5604 14.5076 14.4442C14.5676 14.3864 14.6116 14.3398 14.6388 14.3099C14.6523 14.295 14.6616 14.2843 14.6665 14.2786L14.6704 14.274C14.9321 13.9553 15.4025 13.9076 15.723 14.1679C16.0444 14.4291 16.0933 14.9015 15.8321 15.223L15.25 14.75C15.8321 15.223 15.8319 15.2232 15.8317 15.2234L15.8313 15.224L15.8304 15.2251L15.8282 15.2278L15.8223 15.2348L15.8051 15.2551C15.7912 15.2714 15.7723 15.2929 15.7486 15.319C15.7012 15.3712 15.6341 15.4418 15.5482 15.5246C15.3767 15.6897 15.127 15.9064 14.8048 16.1227C14.162 16.5542 13.2059 17 12 17C10.7942 17 9.83801 16.5542 9.19527 16.1227C8.87304 15.9064 8.62331 15.6897 8.45189 15.5246C8.36592 15.4418 8.29885 15.3712 8.25144 15.319C8.22771 15.2929 8.20884 15.2714 8.1949 15.2551L8.1777 15.2348L8.17189 15.2278L8.16968 15.2251L8.16875 15.224L8.16833 15.2234C8.16813 15.2232 8.16794 15.223 8.75002 14.75L8.16794 15.223C7.90674 14.9015 7.9556 14.4291 8.27708 14.1679ZM14.75 10.375C14.5429 10.375 14.375 10.5429 14.375 10.75C14.375 11.0952 14.0952 11.375 13.75 11.375C13.4048 11.375 13.125 11.0952 13.125 10.75C13.125 9.85254 13.8525 9.125 14.75 9.125C15.6475 9.125 16.375 9.85254 16.375 10.75C16.375 11.0952 16.0952 11.375 15.75 11.375C15.4048 11.375 15.125 11.0952 15.125 10.75C15.125 10.5429 14.9571 10.375 14.75 10.375Z" fill="#4400FF"/>
</svg>

    )
  };

  HappyFaceeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  HappyFaceeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default HappyFaceeDuotoneF
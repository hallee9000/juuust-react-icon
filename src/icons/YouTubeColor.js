import React from 'react';
import PropTypes from 'prop-types';

const YouTubeColor = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.1248 7.53571C20.0273 7.14223 19.8371 6.78351 19.5731 6.49527C19.3092 6.20703 18.9806 5.99933 18.6203 5.89286C17.301 5.5 11.9914 5.5 11.9914 5.5C11.9914 5.5 6.68177 5.5119 5.36254 5.90476C5.00218 6.01124 4.67365 6.21894 4.40967 6.50718C4.14569 6.79542 3.95548 7.15414 3.85796 7.54762C3.45892 10.1071 3.30411 14.0071 3.86887 16.4643C3.96638 16.8578 4.1566 17.2165 4.42058 17.5047C4.68455 17.793 5.01308 18.0007 5.37344 18.1071C6.69267 18.5 12.0023 18.5 12.0023 18.5C12.0023 18.5 17.3119 18.5 18.6312 18.1071C18.9915 18.0007 19.3201 17.793 19.584 17.5047C19.848 17.2165 20.0382 16.8578 20.1357 16.4643C20.5566 13.9012 20.6863 10.0036 20.1248 7.53571Z"
          fill="#FF0000"
        />
        <path
          d="M10.4319 14.542L14.5971 11.9794L10.4319 9.41675V14.542Z"
          fill="white"
        />
      </svg>
    </svg>
  );
};

YouTubeColor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

YouTubeColor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default YouTubeColor;

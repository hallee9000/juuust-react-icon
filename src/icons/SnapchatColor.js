import React from 'react';
import PropTypes from 'prop-types';

const SnapchatColor = props => {
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
          d="M19.6227 15.8739C19.556 15.6534 19.2371 15.4979 19.2371 15.4979C19.207 15.4821 19.18 15.4678 19.1578 15.4567C18.6263 15.1996 18.1551 14.8903 17.7584 14.5396C17.4395 14.2572 17.1667 13.9462 16.9477 13.6162C16.6796 13.2133 16.5542 12.8769 16.5003 12.6944C16.4701 12.5754 16.4749 12.5279 16.5003 12.466C16.5209 12.4136 16.5828 12.3644 16.6114 12.3406C16.7906 12.2137 17.0794 12.0265 17.2571 11.9123C17.411 11.8123 17.5427 11.7266 17.6204 11.6727C17.8695 11.4982 18.0409 11.3205 18.1408 11.1285C18.2709 10.881 18.2868 10.6081 18.1852 10.34C18.0488 9.97823 17.7109 9.76245 17.2809 9.76245C17.1857 9.76245 17.0873 9.77356 16.989 9.79418C16.743 9.84813 16.5098 9.93539 16.3147 10.0115C16.3004 10.0179 16.2845 10.0068 16.2861 9.99092C16.3067 9.50701 16.3305 8.85652 16.2766 8.23934C16.229 7.68086 16.1132 7.20965 15.926 6.79873C15.7372 6.38622 15.4912 6.0816 15.2993 5.86106C15.1168 5.65163 14.7947 5.34225 14.3092 5.0646C13.627 4.6743 12.8496 4.47598 11.9992 4.47598C11.1504 4.47598 10.3745 4.6743 9.69071 5.0646C9.17666 5.35812 8.84824 5.68971 8.6991 5.86106C8.50713 6.0816 8.26121 6.38622 8.07241 6.79873C7.8836 7.20965 7.76937 7.67928 7.72177 8.23934C7.66783 8.85969 7.69004 9.45783 7.71225 9.99092C7.71225 10.0068 7.69798 10.0179 7.68211 10.0115C7.48696 9.93539 7.25373 9.84813 7.00782 9.79418C6.91103 9.77356 6.81267 9.76245 6.71589 9.76245C6.28751 9.76245 5.94957 9.97823 5.81154 10.34C5.71 10.6081 5.72586 10.881 5.85596 11.1285C5.9575 11.3205 6.12727 11.4982 6.37636 11.6727C6.45251 11.7266 6.58579 11.8123 6.73968 11.9123C6.91262 12.0249 7.19344 12.2074 7.37431 12.3327C7.39653 12.3486 7.47268 12.4057 7.49648 12.466C7.52187 12.5294 7.52663 12.577 7.49331 12.704C7.43778 12.888 7.31244 13.2212 7.04907 13.6162C6.83012 13.9478 6.55723 14.2572 6.23833 14.5396C5.84168 14.8903 5.37047 15.1996 4.83897 15.4567C4.81358 15.4694 4.78344 15.4836 4.75171 15.5027C4.75171 15.5027 4.43439 15.6645 4.3741 15.8739C4.28525 16.1833 4.52165 16.4737 4.76123 16.6291C5.1547 16.883 5.63384 17.0194 5.91149 17.094C5.98923 17.1146 6.05904 17.1337 6.12251 17.1527C6.16217 17.1654 6.26213 17.2035 6.30496 17.259C6.35891 17.3288 6.36525 17.4145 6.38429 17.5113C6.41444 17.6747 6.48266 17.8762 6.68415 18.0158C6.90627 18.1681 7.1871 18.1792 7.54408 18.1935C7.91692 18.2078 8.3802 18.2252 8.91171 18.4014C9.15762 18.4823 9.38133 18.6203 9.63836 18.779C10.1778 19.1106 10.8489 19.5231 11.9944 19.5231C13.1415 19.5231 13.8174 19.109 14.36 18.7758C14.617 18.6187 14.8376 18.4823 15.0787 18.4029C15.6102 18.2268 16.0735 18.2094 16.4464 18.1951C16.8033 18.1808 17.0842 18.1713 17.3063 18.0174C17.522 17.8683 17.5839 17.6461 17.6125 17.4796C17.6283 17.397 17.6379 17.3225 17.6855 17.2622C17.7267 17.2098 17.8187 17.1733 17.8616 17.1591C17.9266 17.1384 17.9996 17.1194 18.0805 17.0972C18.3582 17.0226 18.7072 16.9354 19.1308 16.6958C19.6417 16.4054 19.6766 16.05 19.6227 15.8739Z"
          fill="white"
        />
        <path
          d="M20.0642 15.7026C19.9515 15.3948 19.7358 15.2314 19.4914 15.0949C19.4454 15.0679 19.4026 15.0457 19.3677 15.0299C19.2947 14.9918 19.2201 14.9553 19.1456 14.9172C18.3824 14.5126 17.7859 14.0018 17.3734 13.3973C17.2337 13.1926 17.137 13.0086 17.0687 12.8578C17.0338 12.7563 17.0354 12.6992 17.0608 12.6468C17.0798 12.6072 17.1306 12.5659 17.1592 12.5453C17.2909 12.458 17.4257 12.3708 17.5177 12.3121C17.6812 12.2058 17.8112 12.1217 17.8938 12.0646C18.2079 11.8456 18.4268 11.6124 18.5633 11.3522C18.7569 10.9857 18.7806 10.5668 18.6315 10.1734C18.4253 9.62758 17.908 9.28805 17.2829 9.28805C17.1528 9.28805 17.0211 9.30233 16.891 9.33089C16.8561 9.33882 16.8228 9.34676 16.7895 9.35469C16.7958 8.98343 16.7863 8.58679 16.753 8.19966C16.6356 6.83521 16.158 6.11966 15.6599 5.55008C15.452 5.3121 15.0903 4.96464 14.5477 4.65367C13.7909 4.21895 12.9341 4 11.9996 4C11.0683 4 10.2116 4.21895 9.45476 4.65208C8.90898 4.96305 8.54724 5.3121 8.34098 5.5485C7.8428 6.11808 7.36524 6.83362 7.24783 8.19808C7.21452 8.5852 7.20658 8.98185 7.21134 9.3531C7.17803 9.34517 7.14312 9.33724 7.1098 9.32931C6.9797 9.30075 6.84643 9.28647 6.71792 9.28647C6.09281 9.28647 5.57558 9.62599 5.36933 10.1718C5.22019 10.5652 5.24399 10.9841 5.43755 11.3506C5.574 11.6108 5.79453 11.844 6.10709 12.063C6.19118 12.1217 6.31969 12.2058 6.48311 12.3105C6.57195 12.3676 6.70047 12.4517 6.82739 12.5358C6.84643 12.5485 6.91465 12.5992 6.93845 12.6468C6.96542 12.7008 6.96542 12.7595 6.92576 12.8674C6.85912 13.0149 6.76234 13.1958 6.6259 13.3957C6.22132 13.9875 5.64222 14.4888 4.90446 14.8887C4.51258 15.0965 4.10642 15.2345 3.93507 15.701C3.80497 16.0532 3.89064 16.4546 4.21906 16.7926C4.32695 16.9084 4.4634 17.0115 4.63475 17.1067C5.03774 17.3288 5.38044 17.4383 5.65015 17.5129C5.69775 17.5271 5.80722 17.562 5.85482 17.6049C5.9754 17.7096 5.95795 17.8683 6.11819 18.0999C6.21497 18.2443 6.32603 18.3426 6.41806 18.4061C6.75282 18.6377 7.13043 18.652 7.53025 18.6679C7.8904 18.6822 8.29973 18.698 8.76619 18.8519C8.95975 18.9154 9.16124 19.0391 9.39288 19.1819C9.95136 19.5262 10.7177 19.9958 11.998 19.9958C13.28 19.9958 14.0495 19.523 14.6127 19.1788C14.8444 19.0376 15.0443 18.9138 15.2315 18.8519C15.6979 18.698 16.1073 18.6822 16.4674 18.6679C16.8672 18.652 17.2433 18.6377 17.5796 18.4061C17.6843 18.3331 17.8176 18.2141 17.9223 18.0333C18.0365 17.8381 18.035 17.7001 18.1428 17.6065C18.1873 17.5684 18.2841 17.5351 18.3364 17.5192C18.6077 17.4446 18.9552 17.3352 19.3661 17.1083C19.5486 17.0083 19.6898 16.8989 19.8024 16.7735C19.804 16.7719 19.8056 16.7703 19.8072 16.7688C20.1134 16.4356 20.1911 16.0469 20.0642 15.7026ZM18.9266 16.3134C18.2317 16.6974 17.77 16.6561 17.4114 16.8862C17.1068 17.0829 17.2861 17.5065 17.0656 17.6588C16.7927 17.8476 15.9883 17.6461 14.9491 17.9888C14.0923 18.2728 13.545 19.0867 12.0012 19.0867C10.4543 19.0867 9.9228 18.276 9.05336 17.9888C8.01415 17.6461 7.20817 17.8476 6.93687 17.6588C6.71633 17.5065 6.89561 17.0829 6.59099 16.8862C6.23243 16.6545 5.77073 16.6958 5.07581 16.3134C4.63316 16.0691 4.88384 15.9184 5.03139 15.847C7.5477 14.6301 7.94751 12.7484 7.96655 12.6072C7.98876 12.439 8.01256 12.3057 7.82693 12.1328C7.64765 11.9662 6.8496 11.4728 6.62907 11.3189C6.26257 11.0634 6.10233 10.808 6.22132 10.4939C6.30382 10.2765 6.5069 10.1956 6.72109 10.1956C6.78773 10.1956 6.85595 10.2035 6.921 10.2178C7.3224 10.305 7.7127 10.5065 7.93799 10.5605C7.96973 10.5684 7.9967 10.5716 8.0205 10.5716C8.14108 10.5716 8.18233 10.5113 8.17439 10.3733C8.14901 9.93379 8.08555 9.07704 8.15536 8.27582C8.25055 7.17474 8.60594 6.62895 9.02797 6.14505C9.23105 5.91341 10.183 4.90752 12.0028 4.90752C13.8274 4.90752 14.7745 5.91341 14.9776 6.14505C15.3997 6.62737 15.755 7.17315 15.8502 8.27582C15.9201 9.07704 15.8598 9.93379 15.8312 10.3733C15.8217 10.5177 15.8661 10.5716 15.9851 10.5716C16.0089 10.5716 16.0375 10.5684 16.0676 10.5605C16.2929 10.5065 16.6832 10.305 17.0846 10.2178C17.1496 10.2035 17.2179 10.1956 17.2845 10.1956C17.4987 10.1956 17.7018 10.2781 17.7843 10.4939C17.9033 10.808 17.7414 11.0634 17.3765 11.3189C17.156 11.4728 16.3579 11.9662 16.1787 12.1328C15.993 12.3041 16.0168 12.4374 16.039 12.6072C16.0565 12.7484 16.4579 14.6301 18.9742 15.847C19.117 15.9184 19.3693 16.0691 18.9266 16.3134Z"
          fill="black"
        />
      </svg>
    </svg>
  );
};

SnapchatColor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SnapchatColor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SnapchatColor;

import React from 'react';
import PropTypes from 'prop-types';

const IconsBomThreadFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2h-4v2H8v1.007a10.54 10.54 0 00-1.05.017c-.67.044-1.584.166-2.494.49-.908.323-1.878.873-2.566 1.814-.703.962-1.03 2.225-.833 3.807.15 1.192.607 2.173 1.321 2.94.706.757 1.615 1.256 2.597 1.574.928.301 1.958.454 3.025.503V20h2v2h4v-2h2v-4.796a49.861 49.861 0 004.326-1.231l.04-.014.011-.004.005-.001a1 1 0 10-.666-1.886h-.001l-.008.003-.033.011-.135.046c-.12.04-.298.1-.525.172a47.289 47.289 0 01-3.014.847V4h-2V2zm0 11.592V6h-4v8.133c.43-.026.869-.065 1.31-.116a33.86 33.86 0 002.69-.425zm-4 2.545V18h4v-2.371c-.796.149-1.626.28-2.462.375-.507.058-1.022.104-1.538.133zM8 14.15V7.01l-.022-.002h-.007A3.288 3.288 0 007.75 7c-.16-.002-.391 0-.669.018-.563.037-1.278.138-1.953.379-.678.241-1.25.6-1.623 1.11-.357.488-.608 1.22-.464 2.379.101.807.394 1.388.8 1.825.416.446 1 .791 1.751 1.035.706.229 1.523.356 2.408.403z"
      ></path>
    </svg>
  );
};

IconsBomThreadFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomThreadFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomThreadFill;

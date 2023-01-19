import React from 'react';
import PropTypes from 'prop-types';

const IconsRefreshFill = props => {
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
        d="M7.37 6.75a7.002 7.002 0 0111.513 3.968l-1.124-.91-1.259 1.554 3.753 3.039 3.039-3.752-1.555-1.259-.868 1.072C20.14 6.224 16.446 3 12 3a8.97 8.97 0 00-5.953 2.25l-.75.662 1.324 1.5.75-.662zm-1.129 7.442l-1.124-.91a7.002 7.002 0 0011.258 4.183l.78-.625 1.25 1.56-.78.626A8.966 8.966 0 0112 21c-4.446 0-8.139-3.224-8.869-7.461l-.868 1.071L.71 13.352l3.039-3.753L7.5 12.638l-1.259 1.554z"
      ></path>
    </svg>
  );
};

IconsRefreshFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsRefreshFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsRefreshFill;

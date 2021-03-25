import React from 'react';
import PropTypes from 'prop-types';

const MobileFill = props => {
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.25 3.5C7.42157 3.5 6.75 4.17157 6.75 5V16.25H17.25V5C17.25 4.17157 16.5784 3.5 15.75 3.5H8.25ZM17.25 17.25H6.75V19C6.75 19.8284 7.42157 20.5 8.25 20.5H15.75C16.5784 20.5 17.25 19.8284 17.25 19V17.25ZM12.5 18.75C12.5 19.0261 12.2761 19.25 12 19.25C11.7239 19.25 11.5 19.0261 11.5 18.75C11.5 18.4739 11.7239 18.25 12 18.25C12.2761 18.25 12.5 18.4739 12.5 18.75Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

MobileFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MobileFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MobileFill;

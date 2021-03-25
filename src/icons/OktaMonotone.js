import React from 'react';
import PropTypes from 'prop-types';

const OktaMonotone = props => {
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
          d="M12 3.5C7.30219 3.5 3.5 7.30219 3.5 12C3.5 16.6978 7.30219 20.5 12 20.5C16.6978 20.5 20.5 16.6978 20.5 12C20.5 7.30219 16.6978 3.5 12 3.5ZM12 16.2585C9.65109 16.2585 7.74155 14.3489 7.74155 12C7.74155 9.65109 9.65109 7.74155 12 7.74155C14.3489 7.74155 16.2584 9.65109 16.2584 12C16.2584 14.3489 14.3489 16.2585 12 16.2585Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

OktaMonotone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OktaMonotone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OktaMonotone;

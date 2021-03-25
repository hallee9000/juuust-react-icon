import React from 'react';
import PropTypes from 'prop-types';

const RedoFill = props => {
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
          d="M20.5 7.5H10C6.41015 7.5 3.5 10.4101 3.5 14C3.5 17.5899 6.41015 20.5 10 20.5H12"
          stroke="#0A0A0B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 12L20.5 7.5L16 3"
          stroke="#0A0A0B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

RedoFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RedoFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RedoFill;

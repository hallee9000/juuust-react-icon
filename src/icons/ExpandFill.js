import React from 'react';
import PropTypes from 'prop-types';

const ExpandFill = props => {
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
          d="M12 18.5L8.5 15H15.5L12 18.5Z"
          fill="#0A0A0B"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 5.5L8.5 9H15.5L12 5.5Z"
          fill="#0A0A0B"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

ExpandFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ExpandFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ExpandFill;

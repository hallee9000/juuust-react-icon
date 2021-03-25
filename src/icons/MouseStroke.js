import React from 'react';
import PropTypes from 'prop-types';

const MouseStroke = props => {
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
          d="M12 4.00012C8.68629 4.00012 6 6.68641 6 10.0001L6 14.0001C6 17.3138 8.68629 20.0001 12 20.0001V20.0001C15.3137 20.0001 18 17.3138 18 14.0001L18 10.0001C18 6.68641 15.3137 4.00012 12 4.00012V4.00012Z"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M12 11.0001L12 8.00012"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

MouseStroke.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MouseStroke.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MouseStroke;

import React from 'react';
import PropTypes from 'prop-types';

const RejectDuplicateStroke = props => {
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
          d="M9.25 14.5H5C4.44772 14.5 4 14.0523 4 13.5V5C4 4.44772 4.44772 4 5 4H13.5C14.0523 4 14.5 4.44772 14.5 5V9.25"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 19C20 19.5523 19.5523 20 19 20H10.5C9.94772 20 9.5 19.5523 9.5 19V10.5C9.5 9.94772 9.94772 9.5 10.5 9.5H19C19.5523 9.5 20 9.94772 20 10.5V19Z"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.75 12.75L12.75 16.75"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.75 12.75L16.75 16.75"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

RejectDuplicateStroke.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RejectDuplicateStroke.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RejectDuplicateStroke;

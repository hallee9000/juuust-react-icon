import React from 'react';
import PropTypes from 'prop-types';

const CollapseDuotoneF = props => {
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
          opacity="0.8"
          d="M12 14.5L8.5 18H15.5L12 14.5Z"
          fill="#34D399"
          stroke="#34D399"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.8"
          d="M12 9.5L8.5 6H15.5L12 9.5Z"
          fill="#4400FF"
          stroke="#4400FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

CollapseDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CollapseDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CollapseDuotoneF;

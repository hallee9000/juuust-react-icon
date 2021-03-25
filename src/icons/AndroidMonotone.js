import React from 'react';
import PropTypes from 'prop-types';

const AndroidMonotone = props => {
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
          d="M6.17059 6.22968C6.02126 5.9974 5.71191 5.93015 5.47962 6.07947C5.24734 6.2288 5.18008 6.53815 5.32941 6.77044L6.97864 9.3359C4.24686 10.9069 2.32724 13.7204 2 17.0001H22C21.6728 13.7204 19.7531 10.9069 17.0214 9.3359L18.6706 6.77044C18.8199 6.53815 18.7527 6.2288 18.5204 6.07947C18.2881 5.93015 17.9787 5.9974 17.8294 6.22968L16.1262 8.87912C14.8673 8.31436 13.4706 8.00006 12 8.00006C10.5294 8.00006 9.13267 8.31436 7.8738 8.87912L6.17059 6.22968ZM6.5 13.5C6.5 12.9477 6.94571 12.5 7.49552 12.5H7.50448C8.05429 12.5 8.5 12.9477 8.5 13.5C8.5 14.0523 8.05429 14.5 7.50448 14.5H7.49552C6.94571 14.5 6.5 14.0523 6.5 13.5ZM15.5 13.5C15.5 12.9477 15.9457 12.5 16.4955 12.5H16.5045C17.0543 12.5 17.5 12.9477 17.5 13.5C17.5 14.0523 17.0543 14.5 16.5045 14.5H16.4955C15.9457 14.5 15.5 14.0523 15.5 13.5Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

AndroidMonotone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AndroidMonotone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AndroidMonotone;

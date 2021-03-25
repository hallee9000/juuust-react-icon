import React from 'react';
import PropTypes from 'prop-types';

const HiddenFill = props => {
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
          d="M2.49003 11.5638C3.07833 10.5496 4.73591 7.99692 7.32966 6.39032L9.92505 8.98571C9.66756 8.90572 9.37547 8.96768 9.17157 9.17157C7.60948 10.7337 7.60948 13.2663 9.17157 14.8284C10.7337 16.3905 13.2663 16.3905 14.8284 14.8284C15.0323 14.6245 15.0943 14.3324 15.0143 14.075L17.772 16.8327C16.2502 18.0409 14.3135 19 12 19C6.70017 19 3.37776 13.9667 2.49003 12.4362C2.3321 12.164 2.3321 11.8361 2.49003 11.5638ZM14.5212 13.5819L10.4181 9.47876C10.4981 9.73625 10.4361 10.0283 10.2322 10.2322C9.25592 11.2085 9.25592 12.7915 10.2322 13.7678C11.2085 14.7441 12.7915 14.7441 13.7678 13.7678C13.9717 13.5639 14.2638 13.5019 14.5212 13.5819ZM21.5099 12.4362C21.1124 13.1216 20.2266 14.5094 18.8937 15.833L8.72795 5.66729C9.71503 5.25485 10.8074 5 12 5C17.2998 5 20.6222 10.0334 21.5099 11.5638C21.6678 11.8361 21.6678 12.164 21.5099 12.4362Z"
          fill="#0A0A0B"
        />
        <path
          d="M5 5L19 19"
          stroke="#0A0A0B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

HiddenFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HiddenFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default HiddenFill;

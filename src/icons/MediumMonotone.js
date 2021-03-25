import React from 'react';
import PropTypes from 'prop-types';

const MediumMonotone = props => {
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
          d="M12 12.5001C12 14.9853 9.98525 17 7.50008 17C5.0149 17 3 14.9853 3 12.5001C3 10.0148 5.01474 8 7.50008 8C9.98541 8 12 10.0148 12 12.5001Z"
          fill="#0A0A0B"
        />
        <path
          d="M18.3937 12.6754C18.3937 15.1058 17.2423 17.0769 15.8219 17.0769C14.4015 17.0769 13.25 15.1058 13.25 12.6754C13.25 10.245 14.4013 8.27393 15.8217 8.27393C17.2421 8.27393 18.3936 10.2443 18.3936 12.6754"
          fill="#0A0A0B"
        />
        <path
          d="M21.1194 12.6754C21.1194 14.8525 20.7145 16.6184 20.2149 16.6184C19.7153 16.6184 19.3105 14.8529 19.3105 12.6754C19.3105 10.4978 19.7155 8.73235 20.2149 8.73235C20.7144 8.73235 21.1194 10.4977 21.1194 12.6754Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

MediumMonotone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MediumMonotone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MediumMonotone;

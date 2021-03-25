import React from 'react';
import PropTypes from 'prop-types';

const FrowningFaceeDuotoneF = props => {
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9.49999 9.25C8.94771 9.25 8.49999 9.69772 8.49999 10.25C8.49999 10.8023 8.94771 11.25 9.49999 11.25H9.50899C10.0613 11.25 10.509 10.8023 10.509 10.25C10.509 9.69772 10.0613 9.25 9.50899 9.25H9.49999ZM8.27707 16.5821C8.59753 16.8425 9.06791 16.7947 9.32961 16.476L9.3335 16.4714C9.33842 16.4657 9.34771 16.455 9.36127 16.4401C9.38844 16.4102 9.43246 16.3636 9.49248 16.3058C9.61306 16.1897 9.79497 16.0314 10.0313 15.8727C10.5058 15.5542 11.1746 15.25 12 15.25C12.8254 15.25 13.4942 15.5542 13.9687 15.8727C14.2051 16.0314 14.387 16.1897 14.5075 16.3058C14.5676 16.3636 14.6116 16.4102 14.6388 16.4401C14.6523 16.455 14.6616 16.4657 14.6665 16.4714L14.6704 16.476C14.9321 16.7947 15.4025 16.8425 15.723 16.5821C16.0444 16.3209 16.0933 15.8485 15.8321 15.5271L15.25 16C15.8321 15.5271 15.8319 15.5268 15.8317 15.5266L15.8313 15.5261L15.8304 15.5249L15.8282 15.5222L15.8223 15.5152L15.8051 15.4949C15.7912 15.4787 15.7723 15.4571 15.7486 15.431C15.7012 15.3789 15.6341 15.3083 15.5481 15.2255C15.3767 15.0603 15.127 14.8436 14.8048 14.6273C14.162 14.1958 13.2059 13.75 12 13.75C10.7942 13.75 9.838 14.1958 9.19526 14.6273C8.87303 14.8436 8.6233 15.0603 8.45188 15.2255C8.36591 15.3083 8.29885 15.3789 8.25143 15.431C8.22771 15.4571 8.20883 15.4787 8.1949 15.4949L8.17769 15.5152L8.17188 15.5222L8.16967 15.5249L8.16874 15.5261L8.16832 15.5266C8.16812 15.5268 8.16793 15.5271 8.75002 16L8.16793 15.5271C7.90673 15.8485 7.95559 16.3209 8.27707 16.5821ZM13.5 10.25C13.5 9.69772 13.9477 9.25 14.5 9.25H14.509C15.0613 9.25 15.509 9.69772 15.509 10.25C15.509 10.8023 15.0613 11.25 14.509 11.25H14.5C13.9477 11.25 13.5 10.8023 13.5 10.25Z"
          fill="#4400FF"
        />
      </svg>
    </svg>
  );
};

FrowningFaceeDuotoneF.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FrowningFaceeDuotoneF.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FrowningFaceeDuotoneF;

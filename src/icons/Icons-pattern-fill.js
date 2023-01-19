import React from 'react';
import PropTypes from 'prop-types';

const IconsPatternFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.355 4.215L19.77 5.63 5.628 19.772l-1.415-1.414L18.356 4.215zm-6.363-.707l1.414 1.415-8.485 8.485-1.414-1.414 8.485-8.486zm8.485 8.485l-1.415-1.414-8.485 8.485 1.414 1.415 8.486-8.486z"
      ></path>
    </svg>
  );
};

IconsPatternFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsPatternFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsPatternFill;

import React from 'react';
import PropTypes from 'prop-types';

const IconsEyeFill = props => {
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
        d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.919 11.605l.169.395-.169.394L21 12c.92.394.919.395.919.396l-.002.002-.002.006-.01.02-.03.07c-.027.06-.067.143-.117.247a16.741 16.741 0 01-2.248 3.41C17.921 18.003 15.42 20 12 20c-3.419 0-5.921-1.997-7.51-3.85a16.743 16.743 0 01-2.247-3.41 10.246 10.246 0 01-.149-.315l-.009-.02-.002-.007-.002-.004L3 12a69.93 69.93 0 01-.92-.396l.002-.002.002-.006.01-.02a7.523 7.523 0 01.148-.317A16.744 16.744 0 014.49 7.85C6.079 5.997 8.58 4 12 4c3.418 0 5.92 1.997 7.508 3.85a16.742 16.742 0 012.248 3.41c.051.104.09.187.117.246l.032.07.009.02.003.006v.003zm-17.488.993A13.74 13.74 0 014.108 12 14.744 14.744 0 016.01 9.15C7.422 7.504 9.42 6 12 6c2.581 0 4.579 1.503 5.99 3.15A14.738 14.738 0 0119.893 12a14.74 14.74 0 01-1.901 2.85C16.579 16.496 14.58 18 12 18c-2.582 0-4.58-1.503-5.992-3.15a14.746 14.746 0 01-1.578-2.252zM21 12l.918-.395L21 12z"
      ></path>
      <path d="M2.08 11.606L3 12l-.92.394L1.913 12l.169-.394z"></path>
    </svg>
  );
};

IconsEyeFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsEyeFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsEyeFill;

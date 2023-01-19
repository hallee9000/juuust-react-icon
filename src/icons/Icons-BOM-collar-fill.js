import React from 'react';
import PropTypes from 'prop-types';

const IconsBomCollarFill = props => {
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
        d="M3 4h18v6.28l2.316.771-.632 1.898-2.607-.87L13 15.619V22h-2v-6.382L3.923 12.08l-2.607.869-.632-1.898L3 10.28V4zm7 5L5.5 6h13L14 9l-1.94 4.852-.06.03-.059-.03L10 9z"
      ></path>
    </svg>
  );
};

IconsBomCollarFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomCollarFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomCollarFill;

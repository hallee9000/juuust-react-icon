import React from 'react';
import PropTypes from 'prop-types';

const IconsBomJacketWaistbandFill = props => {
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
        d="M4.677 9L2.928 4.628l-1.857.743L3 10.193v3.614l-1.929 4.822 1.857.742L4.677 15h14.646l1.748 4.371 1.857-.742L21 13.808v-3.616l1.928-4.82-1.857-.744L19.323 9H4.677zM19 13v-2H5v2h14z"
      ></path>
    </svg>
  );
};

IconsBomJacketWaistbandFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomJacketWaistbandFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomJacketWaistbandFill;

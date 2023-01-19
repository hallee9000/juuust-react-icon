import React from 'react';
import PropTypes from 'prop-types';

const IconsSettingsFill = props => {
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
        d="M15 2H9v2.582a7.99 7.99 0 00-1.923 1.112L4.84 4.402l-3 5.196 2.237 1.291a8.069 8.069 0 000 2.221L1.84 14.402l3 5.196 2.237-1.292c.582.455 1.228.831 1.923 1.113V22h6v-2.581a7.992 7.992 0 001.923-1.113l2.238 1.292 3-5.196-2.237-1.291a8.073 8.073 0 000-2.222l2.236-1.291-3-5.196-2.237 1.292A7.993 7.993 0 0015 4.582V2zm-2 2h-2v2.083a5.994 5.994 0 00-3.623 2.093L5.572 7.134l-1 1.732 1.803 1.041A5.988 5.988 0 006 12c0 .736.133 1.441.375 2.093l-1.803 1.041 1 1.732 1.804-1.042A5.994 5.994 0 0011 17.917V20h2v-2.083a5.993 5.993 0 003.624-2.093l1.804 1.042 1-1.732-1.803-1.041A5.988 5.988 0 0018 12c0-.736-.132-1.441-.375-2.093l1.803-1.041-1-1.732-1.804 1.042A5.994 5.994 0 0013 6.083V4z"
      ></path>
    </svg>
  );
};

IconsSettingsFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsSettingsFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsSettingsFill;

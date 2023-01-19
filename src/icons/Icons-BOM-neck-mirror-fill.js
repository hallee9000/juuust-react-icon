import React from 'react';
import PropTypes from 'prop-types';

const IconsBomNeckMirrorFill = props => {
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
        d="M19.618 15H4.382L3.29 12.818l-2.607-.87.632-1.897 2.536.846L6.697 8h10.606l2.845 2.897 2.536-.846.632 1.898-2.607.869L19.618 15zm-.786-2.9l-.45.9H5.618l-.45-.9L7.303 10h9.394l2.135 2.1z"
      ></path>
    </svg>
  );
};

IconsBomNeckMirrorFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomNeckMirrorFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomNeckMirrorFill;

import React from 'react';
import PropTypes from 'prop-types';

const IconsBomSleeveFill = props => {
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
        d="M20.618 3H10.586L5 8.586v8.576l1 3V22h5v-1.838l1-3V13h3.618l5-10zm-6.236 8H12V5h5.382l-3 6zM10 16.838V6.414l-3 3v7.424L7.72 19h1.56l.72-2.162z"
      ></path>
    </svg>
  );
};

IconsBomSleeveFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsBomSleeveFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsBomSleeveFill;

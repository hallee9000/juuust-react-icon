import React from 'react';
import PropTypes from 'prop-types';

const IconsPowerOffFill = props => {
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
      <path d="M13 2h-2v10h2V2z"></path>
      <path d="M7.625 6.535l.78-.625-1.25-1.56-.78.625a9 9 0 1011.251 0l-.78-.626-1.252 1.56.78.626a7 7 0 11-8.749 0z"></path>
    </svg>
  );
};

IconsPowerOffFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsPowerOffFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsPowerOffFill;

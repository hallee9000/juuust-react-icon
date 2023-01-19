import React from 'react';
import PropTypes from 'prop-types';

const IconsCircleQuestionFill = props => {
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
      <path d="M13 16v2h-2v-2h2z"></path>
      <path d="M10.509 8.667A2 2 0 1112 12h-1v2h1a4 4 0 10-2.982-6.667l-.666.745 1.49 1.334.667-.745z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
      ></path>
    </svg>
  );
};

IconsCircleQuestionFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsCircleQuestionFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsCircleQuestionFill;

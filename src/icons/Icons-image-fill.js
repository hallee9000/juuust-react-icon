import React from 'react';
import PropTypes from 'prop-types';

const IconsImageFill = props => {
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
      <path d="M7.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2v20h20V2H2zm18 2H4v13.514l3.698-5.917 3.094 2.063 4.125-5.157L20 13.585V4zm0 16H4.805l3.498-5.597 2.905 1.938 3.875-4.844L20 16.414V20z"
      ></path>
    </svg>
  );
};

IconsImageFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconsImageFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconsImageFill;


  import React from 'react';
  import PropTypes from 'prop-types';

  const BasicLeftUpDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 17L7 7" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 7H7V17" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  BasicLeftUpDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  BasicLeftUpDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default BasicLeftUpDefault

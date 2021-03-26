
  import React from 'react';
  import PropTypes from 'prop-types';

  const BasicLeftDownDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7L7 17" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17H7V7" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  BasicLeftDownDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  BasicLeftDownDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default BasicLeftDownDefault

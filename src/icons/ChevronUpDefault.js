
  import React from 'react';
  import PropTypes from 'prop-types';

  const ChevronUpDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.25 14L12.25 8L6.25 14" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  ChevronUpDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  ChevronUpDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default ChevronUpDefault

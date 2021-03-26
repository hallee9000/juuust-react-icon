
  import React from 'react';
  import PropTypes from 'prop-types';

  const SearcheDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M20 20L17 17" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 19C15.6421 19 19 15.6421 19 11.5C19 7.35786 15.6421 4 11.5 4C7.35786 4 4 7.35786 4 11.5C4 15.6421 7.35786 19 11.5 19Z" fill="#4400FF" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 19C15.6421 19 19 15.6421 19 11.5C19 7.35786 15.6421 4 11.5 4C7.35786 4 4 7.35786 4 11.5C4 15.6421 7.35786 19 11.5 19Z" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  SearcheDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  SearcheDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default SearcheDuotoneF

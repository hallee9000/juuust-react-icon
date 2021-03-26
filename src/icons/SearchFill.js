
  import React from 'react';
  import PropTypes from 'prop-types';

  const SearchFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0491 17.4633C14.7873 18.4274 13.2105 19 11.5 19C7.35786 19 4 15.6421 4 11.5C4 7.35786 7.35786 4 11.5 4C15.6421 4 19 7.35786 19 11.5C19 13.2105 18.4274 14.7873 17.4633 16.0491L20.2071 18.7929C20.5976 19.1834 20.5976 19.8166 20.2071 20.2071C19.8166 20.5976 19.1834 20.5976 18.7929 20.2071L16.0491 17.4633Z" fill="currentcolor"/>
</svg>

    )
  };

  SearchFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  SearchFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default SearchFill
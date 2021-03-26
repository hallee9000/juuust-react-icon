
  import React from 'react';
  import PropTypes from 'prop-types';

  const FigmaMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 7.20588C7.25 5.98761 8.23761 5 9.45588 5H11.6618V9.41176H9.45588C8.23761 9.41176 7.25 8.42416 7.25 7.20588ZM12.5441 5H14.75C15.9683 5 16.9559 5.98761 16.9559 7.20588C16.9559 8.42416 15.9683 9.41176 14.75 9.41176H12.5441V5ZM14.75 10.2941C13.5317 10.2941 12.5441 11.2817 12.5441 12.5C12.5441 13.7183 13.5317 14.7059 14.75 14.7059C15.9683 14.7059 16.9559 13.7183 16.9559 12.5C16.9559 11.2817 15.9683 10.2941 14.75 10.2941ZM7.25 12.5C7.25 11.2817 8.23761 10.2941 9.45588 10.2941H11.6618V14.7059H9.45588C8.23761 14.7059 7.25 13.7183 7.25 12.5ZM9.45588 15.5882C8.23761 15.5882 7.25 16.5758 7.25 17.7941C7.25 19.0124 8.23761 20 9.45588 20C10.6742 20 11.6618 19.0124 11.6618 17.7941V15.5882H9.45588Z" fill="#0A0A0B"/>
</svg>

    )
  };

  FigmaMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  FigmaMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default FigmaMonotone


  import React from 'react';
  import PropTypes from 'prop-types';

  const OneLoginMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 11.9962C3.5 7.30494 7.31087 3.5 12 3.5C16.6968 3.5 20.5 7.30494 20.5 11.9962C20.5 16.6951 16.6968 20.5 12 20.5C7.30323 20.5 3.5 16.6951 3.5 11.9962ZM13.023 15.2512C13.1834 15.2512 13.2674 15.1671 13.2674 15.0067H13.2598V9.50554C13.2598 9.39093 13.2216 9.30688 13.0612 9.30688H10.0828C9.92239 9.30688 9.83838 9.39093 9.83838 9.55138V11.0795C9.83838 11.2399 9.92239 11.324 10.0828 11.324H11.2512V15.0067C11.2512 15.1671 11.3352 15.2512 11.4956 15.2512H13.023Z" fill="currentcolor"/>
</svg>

    )
  };

  OneLoginMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  OneLoginMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default OneLoginMonotone

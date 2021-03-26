
  import React from 'react';
  import PropTypes from 'prop-types';

  const OneLoginColor = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.5C7.31087 3.5 3.5 7.30494 3.5 11.9962C3.5 16.6951 7.30323 20.5 12 20.5C16.6968 20.5 20.5 16.6951 20.5 11.9962C20.5 7.30494 16.6968 3.5 12 3.5Z" fill="#1C1F2A"/>
<path d="M13.2674 15.0067C13.2674 15.1671 13.1834 15.2512 13.023 15.2512H11.4956C11.3352 15.2512 11.2512 15.1671 11.2512 15.0067V11.324H10.0828C9.92239 11.324 9.83838 11.2399 9.83838 11.0795V9.55138C9.83838 9.39093 9.92239 9.30688 10.0828 9.30688H13.0612C13.2216 9.30688 13.2598 9.39093 13.2598 9.50554V15.0067H13.2674Z" fill="white"/>
</svg>

    )
  };

  OneLoginColor.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  OneLoginColor.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default OneLoginColor

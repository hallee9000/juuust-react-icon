
  import React from 'react';
  import PropTypes from 'prop-types';

  const AttachFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 11.5L13.25 18.75C11.1789 20.8211 7.82107 20.8211 5.75 18.75V18.75C3.67893 16.6789 3.67893 13.3211 5.75 11.25L12 5C13.3807 3.61929 15.6193 3.61929 17 5V5C18.3807 6.38071 18.3807 8.61929 17 10L10.75 16.25C10.0596 16.9404 8.94036 16.9404 8.25 16.25V16.25C7.55964 15.5596 7.55964 14.4404 8.25 13.75L14.5 7.5" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  AttachFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  AttachFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default AttachFill

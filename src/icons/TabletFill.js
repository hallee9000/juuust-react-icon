
  import React from 'react';
  import PropTypes from 'prop-types';

  const TabletFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3.25C5.67157 3.25 5 3.92157 5 4.75V19.25C5 20.0784 5.67157 20.75 6.5 20.75H17.5C18.3284 20.75 19 20.0784 19 19.25V4.75C19 3.92157 18.3284 3.25 17.5 3.25H6.5ZM12 18.75C12.4142 18.75 12.75 18.4142 12.75 18C12.75 17.5858 12.4142 17.25 12 17.25C11.5858 17.25 11.25 17.5858 11.25 18C11.25 18.4142 11.5858 18.75 12 18.75Z" fill="#0A0A0B"/>
</svg>

    )
  };

  TabletFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TabletFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TabletFill

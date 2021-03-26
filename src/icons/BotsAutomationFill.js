
  import React from 'react';
  import PropTypes from 'prop-types';

  const BotsAutomationFill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4C14 4.93192 13.3626 5.71497 12.5 5.93699V8.5H18.5C19.6046 8.5 20.5 9.39543 20.5 10.5V17.5C20.5 18.6046 19.6046 19.5 18.5 19.5H5.5C4.39543 19.5 3.5 18.6046 3.5 17.5V10.5C3.5 9.39543 4.39543 8.5 5.5 8.5H11.5V5.93699C10.6374 5.71497 10 4.93192 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4ZM10.75 14C10.75 15.2426 9.74264 16.25 8.5 16.25C7.25736 16.25 6.25 15.2426 6.25 14C6.25 12.7574 7.25736 11.75 8.5 11.75C9.74264 11.75 10.75 12.7574 10.75 14ZM17.75 14C17.75 15.2426 16.7426 16.25 15.5 16.25C14.2574 16.25 13.25 15.2426 13.25 14C13.25 12.7574 14.2574 11.75 15.5 11.75C16.7426 11.75 17.75 12.7574 17.75 14Z" fill="currentcolor"/>
</svg>

    )
  };

  BotsAutomationFill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  BotsAutomationFill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default BotsAutomationFill

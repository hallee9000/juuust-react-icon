
  import React from 'react';
  import PropTypes from 'prop-types';

  const CallForwardDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.7425 13.8107C19.1877 13.922 19.5 14.322 19.5 14.7808V18.5001C19.5 19.0523 19.0517 19.5036 18.5007 19.4668C16.1413 19.3088 13.9744 18.5969 12 17.5001C9.75 16.2501 7.75 14.2501 6.5 12.0001C5.40312 10.0257 4.69124 7.85878 4.5333 5.49938C4.49641 4.94833 4.94772 4.50006 5.5 4.50006H9.21922C9.67809 4.50006 10.0781 4.81236 10.1894 5.25753L11 8.50006L9.25 10.5001C10 12.5001 11.5 14.0001 13.5 14.7501L15.5 13.0001L18.7425 13.8107Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M18.7425 13.8106C19.1877 13.9219 19.5 14.3219 19.5 14.7808V18.5C19.5 19.0523 19.0517 19.5036 18.5007 19.4667C16.1413 19.3088 13.9744 18.5969 12 17.5C9.75 16.25 7.75 14.25 6.5 12C5.40312 10.0256 4.69124 7.85871 4.5333 5.49932C4.49641 4.94826 4.94772 4.5 5.5 4.5H9.21922C9.67809 4.5 10.0781 4.8123 10.1894 5.25746L11 8.5L9.25 10.5C10 12.5 11.5 14 13.5 14.75L15.5 13L18.7425 13.8106Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M21 6.50006H14.5" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M18 3.50006L21 6.50006L18 9.50006" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  CallForwardDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  CallForwardDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default CallForwardDefault

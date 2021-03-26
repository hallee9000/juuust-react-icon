
  import React from 'react';
  import PropTypes from 'prop-types';

  const PauseDefault = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5.5C14 5.22386 14.2239 5 14.5 5H17.5C17.7761 5 18 5.22386 18 5.5V18.5C18 18.7761 17.7761 19 17.5 19H14.5C14.2239 19 14 18.7761 14 18.5V5.5Z" fill="#EBEFFF"/>
<path d="M6 5.5C6 5.22386 6.22386 5 6.5 5H9.5C9.77614 5 10 5.22386 10 5.5V18.5C10 18.7761 9.77614 19 9.5 19H6.5C6.22386 19 6 18.7761 6 18.5V5.5Z" fill="#EBEFFF"/>
<path opacity="0.8" d="M14 5.5C14 5.22386 14.2239 5 14.5 5H17.5C17.7761 5 18 5.22386 18 5.5V18.5C18 18.7761 17.7761 19 17.5 19H14.5C14.2239 19 14 18.7761 14 18.5V5.5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6 5.5C6 5.22386 6.22386 5 6.5 5H9.5C9.77614 5 10 5.22386 10 5.5V18.5C10 18.7761 9.77614 19 9.5 19H6.5C6.22386 19 6 18.7761 6 18.5V5.5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  PauseDefault.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  PauseDefault.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default PauseDefault


  import React from 'react';
  import PropTypes from 'prop-types';

  const MaileDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M6 16L8.5 13.5M18 16L15.5 13.5" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M3 5.5C3 5.22386 3.22386 5 3.5 5H20.5C20.7761 5 21 5.22386 21 5.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V5.5Z" fill="#4400FF"/>
<path opacity="0.8" d="M12 14L20.5 5.5H3.5L12 14Z" fill="#34D399" stroke="#34D399" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  MaileDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  MaileDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default MaileDuotoneF

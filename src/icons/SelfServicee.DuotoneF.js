
  import React from 'react';
  import PropTypes from 'prop-types';

  const SelfServiceeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.8" x="4.00098" y="4.00006" width="7" height="7" rx="1.5" fill="#4400FF"/>
<rect opacity="0.8" x="4" y="13" width="7" height="7" rx="1.5" fill="#4400FF"/>
<rect opacity="0.8" x="4" y="4" width="16" height="7" rx="1.5" fill="#4400FF"/>
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M14.0003 13H19.2003C19.6458 13 19.8689 13.5386 19.5539 13.8535L13.8539 19.5537C13.5389 19.8687 13.0003 19.6456 13.0003 19.2002V14C13.0003 13.4477 13.448 13 14.0003 13ZM17.4534 15.9568L15.9569 17.4533L18.1693 19.6657C18.5825 20.079 19.2525 20.079 19.6658 19.6657C20.079 19.2525 20.079 18.5825 19.6658 18.1692L17.4534 15.9568Z" fill="#34D399"/>
</svg>

    )
  };

  SelfServiceeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  SelfServiceeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default SelfServiceeDuotoneF

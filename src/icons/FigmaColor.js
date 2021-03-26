
  import React from 'react';
  import PropTypes from 'prop-types';

  const FigmaColor = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7.5C7 6.11929 8.11929 5 9.5 5H12V10H9.5C8.11929 10 7 8.88071 7 7.5Z" fill="#F24E1E"/>
<path d="M12 5H14.5C15.8807 5 17 6.11929 17 7.5C17 8.88071 15.8807 10 14.5 10H12V5Z" fill="#FF7262"/>
<rect x="12" y="10" width="5" height="5" rx="2.5" fill="#1ABCFE"/>
<path d="M7 12.5C7 11.1193 8.11929 10 9.5 10H12V15H9.5C8.11929 15 7 13.8807 7 12.5Z" fill="#A259FF"/>
<path d="M7 17.5C7 16.1193 8.11929 15 9.5 15H12V17.5C12 18.8807 10.8807 20 9.5 20C8.11929 20 7 18.8807 7 17.5Z" fill="#0ACF83"/>
</svg>

    )
  };

  FigmaColor.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  FigmaColor.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default FigmaColor
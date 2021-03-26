
  import React from 'react';
  import PropTypes from 'prop-types';

  const LinkedInColor = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="16" height="16" rx="1.25" fill="#0A66C2"/>
<path d="M6.33662 9.99992H8.66996V17.6666H6.33662V9.99992Z" fill="white"/>
<path d="M8.64886 6.73793C8.79629 6.96447 8.87324 7.22965 8.86996 7.49992V7.54992C8.86564 7.72503 8.82685 7.89758 8.75582 8.05769C8.68479 8.21781 8.5829 8.36236 8.45598 8.48309C8.32907 8.60382 8.1796 8.69835 8.01613 8.76129C7.85267 8.82424 7.6784 8.85435 7.50329 8.84992H7.48662C7.21635 8.8466 6.95313 8.76322 6.73025 8.61031C6.50737 8.4574 6.33483 8.24184 6.23445 7.99087C6.13408 7.73991 6.11038 7.46482 6.16634 7.20038C6.22231 6.93595 6.35543 6.69404 6.54887 6.50526C6.74231 6.31648 6.98739 6.1893 7.25311 6.1398C7.51883 6.0903 7.79326 6.12071 8.0417 6.22717C8.29014 6.33364 8.50144 6.51138 8.64886 6.73793Z" fill="white"/>
<path d="M14.7866 9.83325C16.1266 9.83325 17.67 10.7399 17.67 13.0733V17.6666H15.3366V13.6366C15.3366 12.4033 14.6533 11.8899 13.9866 11.8899C13.1733 11.8899 12.3366 12.4366 12.3366 13.6666V17.6666H10.0033V9.99992H12.2033V11.0833H12.2333C12.4533 10.6133 13.4466 9.83325 14.7866 9.83325Z" fill="white"/>
</svg>

    )
  };

  LinkedInColor.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  LinkedInColor.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default LinkedInColor

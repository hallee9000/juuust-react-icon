
  import React from 'react';
  import PropTypes from 'prop-types';

  const Music1Fill = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 15C19 16.3807 17.8807 17.5 16.5 17.5C15.1193 17.5 14 16.3807 14 15C14 13.6193 15.1193 12.5 16.5 12.5C17.8807 12.5 19 13.6193 19 15Z" fill="#0A0A0B" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 16.5C9 17.8807 7.88071 19 6.5 19C5.11929 19 4 17.8807 4 16.5C4 15.1193 5.11929 14 6.5 14C7.88071 14 9 15.1193 9 16.5Z" fill="#0A0A0B" stroke="#0A0A0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 16.5V6.5L18.5 5V15" stroke="#0A0A0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  Music1Fill.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  Music1Fill.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default Music1Fill

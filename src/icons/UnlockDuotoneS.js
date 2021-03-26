
  import React from 'react';
  import PropTypes from 'prop-types';

  const UnlockDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M8 9.5V7.5C8 5.29086 9.79086 3.5 12 3.5C13.4806 3.5 14.75 4.25 15.5 5.5" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M4.5 11.5C4.5 10.3954 5.39543 9.5 6.5 9.5H17.5C18.6046 9.5 19.5 10.3954 19.5 11.5V17.5C19.5 18.6046 18.6046 19.5 17.5 19.5H6.5C5.39543 19.5 4.5 18.6046 4.5 17.5V11.5Z" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle opacity="0.8" cx="12" cy="14.5" r="1.25" fill="#34D399"/>
</svg>

    )
  };

  UnlockDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  UnlockDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default UnlockDuotoneS


  import React from 'react';
  import PropTypes from 'prop-types';

  const EditeDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M15.5 4.5L4 16V20H8L19.5 8.5C20.6046 7.39543 20.6046 5.60457 19.5 4.5C18.3954 3.39543 16.6046 3.39543 15.5 4.5Z" fill="#4400FF" stroke="#4400FF" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M6.5 17.5L15.5 8.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M13.5 6.5L17.5 10.5" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  EditeDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  EditeDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default EditeDuotoneF
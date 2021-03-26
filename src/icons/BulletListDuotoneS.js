
  import React from 'react';
  import PropTypes from 'prop-types';

  const BulletListDuotoneS = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M6.5 17H20.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle opacity="0.8" cx="3.25" cy="17" r="0.75" fill="#34D399"/>
<path opacity="0.8" d="M6.5 12H20.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle opacity="0.8" cx="3.25" cy="12" r="0.75" fill="#34D399"/>
<path opacity="0.8" d="M6.5 7H20.5" stroke="#4400FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle opacity="0.8" cx="3.25" cy="7" r="0.75" fill="#34D399"/>
</svg>

    )
  };

  BulletListDuotoneS.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  BulletListDuotoneS.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default BulletListDuotoneS

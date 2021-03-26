
  import React from 'react';
  import PropTypes from 'prop-types';

  const UpdateDuotoneF = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M12.5 4.25C16.25 4.25 20.25 7 20.25 12C20.25 16.25 17.0209 18.3389 15.75 19" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M19.25 20.7499C19.8023 20.7499 20.25 20.3022 20.25 19.7499C20.25 19.1976 19.8023 18.7499 19.25 18.7499L19.25 20.7499ZM15.5 19.7499L14.5 19.7499C14.5 20.0151 14.6054 20.2694 14.7929 20.457C14.9804 20.6445 15.2348 20.7499 15.5 20.7499L15.5 19.7499ZM16.5 16C16.5 15.4477 16.0523 15 15.5 15C14.9477 15 14.5 15.4477 14.5 16L16.5 16ZM19.25 18.7499L15.5 18.7499L15.5 20.7499L19.25 20.7499L19.25 18.7499ZM16.5 19.7499L16.5 16L14.5 16L14.5 19.7499L16.5 19.7499Z" fill="#34D399"/>
<path opacity="0.8" d="M11.45 19.75C7.5 19.75 3.75 16.75 3.75 12C3.75 7.75 6.97908 5.66114 8.25 5" stroke="#4400FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.8" d="M4.75 3.25013C4.19772 3.25013 3.75 3.69785 3.75 4.25013C3.75 4.80242 4.19772 5.25013 4.75 5.25013L4.75 3.25013ZM8.5 4.25013L9.5 4.25013C9.5 3.98492 9.39464 3.73056 9.20711 3.54303C9.01957 3.35549 8.76522 3.25013 8.5 3.25013L8.5 4.25013ZM7.5 8C7.5 8.55228 7.94772 9 8.5 9C9.05228 9 9.5 8.55228 9.5 8L7.5 8ZM4.75 5.25013L8.5 5.25013L8.5 3.25013L4.75 3.25013L4.75 5.25013ZM7.5 4.25013L7.5 8L9.5 8L9.5 4.25013L7.5 4.25013Z" fill="#34D399"/>
</svg>

    )
  };

  UpdateDuotoneF.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  UpdateDuotoneF.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default UpdateDuotoneF

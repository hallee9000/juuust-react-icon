
  import React from 'react';
  import PropTypes from 'prop-types';

  const FacebookMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3275 20.3969C17.3914 19.7596 20.5 16.2428 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.2425 6.60811 19.759 10.6715 20.3968V14.4577H8.5127V12.0001H10.6715V10.127C10.6715 7.99568 11.9409 6.81946 13.8821 6.81946C14.8121 6.81946 15.7851 6.9856 15.7851 6.9856V9.07747H14.7129C13.6562 9.07747 13.3275 9.73369 13.3275 10.4055V12H15.6846L15.3081 14.4576L15.3082 14.4577H13.3275V20.3969ZM12.2376 20.4967C12.5347 20.4885 12.8278 20.4649 13.1165 20.4273C12.8278 20.4652 12.5346 20.4886 12.2376 20.4967Z" fill="#0A0A0B"/>
</svg>

    )
  };

  FacebookMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  FacebookMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default FacebookMonotone

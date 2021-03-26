
  import React from 'react';
  import PropTypes from 'prop-types';

  const AppleColor = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1856 16.8146C18.9163 17.4509 18.5975 18.0367 18.2282 18.5752C17.7248 19.3094 17.3125 19.8176 16.9949 20.0998C16.5024 20.563 15.9748 20.8002 15.4098 20.8137C15.0042 20.8137 14.515 20.6957 13.9456 20.4562C13.3744 20.2178 12.8494 20.0998 12.3693 20.0998C11.8659 20.0998 11.326 20.2178 10.7484 20.4562C10.17 20.6957 9.70405 20.8205 9.34779 20.8328C8.80599 20.8565 8.26594 20.6125 7.72688 20.0998C7.38282 19.7929 6.95248 19.2667 6.43694 18.5213C5.88381 17.7253 5.42906 16.8022 5.07281 15.7499C4.69126 14.6132 4.5 13.5125 4.5 12.4469C4.5 11.2262 4.75788 10.1734 5.2744 9.29118C5.68035 8.58253 6.22039 8.02353 6.89631 7.61316C7.57222 7.20279 8.30254 6.99366 9.08904 6.98028C9.51938 6.98028 10.0837 7.11644 10.785 7.38402C11.4844 7.65251 11.9334 7.78866 12.1303 7.78866C12.2774 7.78866 12.7763 7.62946 13.6219 7.31207C14.4216 7.01772 15.0965 6.89585 15.6494 6.94386C17.1477 7.06753 18.2733 7.67162 19.0218 8.75995C17.6819 9.59036 17.0191 10.7535 17.0322 12.2455C17.0443 13.4077 17.4565 14.3748 18.2667 15.1427C18.6338 15.4991 19.0438 15.7746 19.5 15.9702C19.4011 16.2637 19.2966 16.5447 19.1856 16.8146ZM15.7495 2.98451C15.7495 3.89543 15.4241 4.74595 14.7755 5.53319C13.9929 6.46906 13.0462 7.00985 12.0197 6.92452C12.0066 6.81524 11.999 6.70022 11.999 6.57936C11.999 5.70487 12.3712 4.769 13.0322 4.0038C13.3622 3.61637 13.7818 3.29422 14.2908 3.03724C14.7986 2.78409 15.279 2.64409 15.7308 2.62012C15.744 2.74189 15.7495 2.86369 15.7495 2.98451Z" fill="black"/>
</svg>

    )
  };

  AppleColor.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  AppleColor.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default AppleColor
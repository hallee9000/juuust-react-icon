
  import React from 'react';
  import PropTypes from 'prop-types';

  const TwitterMonotone = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.8796 19.2499C15.1333 19.2499 18.5445 14.0606 18.5445 9.54595V9.10486C19.2074 8.61681 19.7839 8.02038 20.25 7.34051C19.6368 7.62399 18.9826 7.8079 18.3118 7.88538C19.024 7.45774 19.5568 6.78447 19.8107 5.99129C19.1443 6.38105 18.4203 6.66135 17.6659 6.82158C16.3769 5.45586 14.2332 5.38643 12.8592 6.6659C11.9753 7.49135 11.6005 8.72948 11.8772 9.9092C9.1504 9.77384 6.60924 8.4816 4.88704 6.35454C3.98178 7.91022 4.44728 9.90513 5.94655 10.8951C5.40545 10.8739 4.87583 10.7321 4.39605 10.48V10.5319C4.39562 12.1525 5.52893 13.5505 7.10943 13.879C6.61179 14.0128 6.09029 14.0305 5.58477 13.9309C6.03092 15.3205 7.30936 16.2702 8.76331 16.292C7.56461 17.2431 6.07887 17.7556 4.5511 17.745C4.29268 17.745 4.00841 17.7191 3.75 17.6932C5.27157 18.7146 7.06221 19.2566 8.89252 19.2499" fill="currentcolor"/>
</svg>

    )
  };

  TwitterMonotone.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  TwitterMonotone.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default TwitterMonotone


  import React from 'react';
  import PropTypes from 'prop-types';

  const Link2Stroke = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg width={size} height={size} color={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.386 13.5553C11.8325 15.4901 14.748 15.699 16.4553 13.9902L18.8702 11.5742C20.3954 9.99415 20.3736 7.48265 18.8211 5.92941C17.2687 4.37616 14.7584 4.35433 13.1792 5.88035" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.614 10.5944C12.1675 8.65966 9.25195 8.45076 7.54465 10.1595L5.1298 12.5756C3.60453 14.1556 3.62634 16.6671 5.17882 18.2203C6.73131 19.7736 9.24157 19.7954 10.8208 18.2694" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
  };

  Link2Stroke.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }

  Link2Stroke.defaultProps = {
    color: 'currentColor',
    size: '24',
  }

  export default Link2Stroke

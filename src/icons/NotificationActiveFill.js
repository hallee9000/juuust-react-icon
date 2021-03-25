import React from 'react';
import PropTypes from 'prop-types';

const NotificationActiveFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.62392 3.08392C7.85369 3.42856 7.76057 3.89422 7.41592 4.12399C6.06979 5.02145 4.92413 6.62037 4.47109 8.20608C4.35731 8.60436 3.9422 8.83498 3.54392 8.72119C3.14564 8.60741 2.91502 8.19229 3.0288 7.79402C3.57577 5.87955 4.93011 3.97847 6.58385 2.87593C6.92849 2.64616 7.39414 2.73928 7.62392 3.08392ZM16.3759 3.08392C16.6057 2.73928 17.0713 2.64616 17.416 2.87593C19.0697 3.97847 20.4241 5.87955 20.971 7.79402C21.0848 8.19229 20.8542 8.60741 20.4559 8.72119C20.0576 8.83498 19.6425 8.60436 19.5287 8.20608C19.0757 6.62037 17.93 5.02145 16.5839 4.12399C16.2393 3.89422 16.1461 3.42856 16.3759 3.08392ZM10.5375 4.16519C10.6896 3.49791 11.2866 2.99996 12 2.99996C12.7133 2.99996 13.3103 3.49787 13.4624 4.1651C16.3482 4.82852 18.5002 7.41296 18.5002 10.5V14L19.6382 16.2764C19.8044 16.6088 19.5627 17 19.191 17H16H15.5002H8.50022H7.99997H4.80901C4.43731 17 4.19556 16.6088 4.36179 16.2763L5.50003 14V10.5C5.50003 7.41309 7.65191 4.82873 10.5375 4.16519ZM8.83703 18.5C9.39876 19.6824 10.604 20.5 12.0002 20.5C13.3964 20.5 14.6017 19.6824 15.1634 18.5H8.83703Z"
          fill="#0A0A0B"
        />
      </svg>
    </svg>
  );
};

NotificationActiveFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NotificationActiveFill.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NotificationActiveFill;

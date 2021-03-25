import React from 'react';
import PropTypes from 'prop-types';

const BehanceColor = props => {
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
          d="M8.71017 6.00104C9.19653 5.99201 9.68219 6.04187 10.1566 6.14954C10.556 6.23674 10.9352 6.39901 11.274 6.62771C11.587 6.85514 11.8346 7.16089 11.992 7.51427C12.173 7.94881 12.2603 8.41661 12.2482 8.88716C12.2688 9.40383 12.1368 9.91513 11.8688 10.3573C11.5868 10.775 11.1971 11.1085 10.7409 11.3226C11.36 11.4895 11.8992 11.8718 12.2616 12.4007C12.6095 12.9611 12.7843 13.6117 12.7643 14.2711C12.7757 14.7968 12.667 15.3181 12.4465 15.7954C12.2426 16.2118 11.944 16.5747 11.5748 16.855C11.1946 17.1322 10.7667 17.3373 10.3125 17.4601C9.84145 17.5905 9.35483 17.6559 8.8661 17.6547H3.5V6.00104H8.71017ZM8.40054 10.7145C8.78268 10.7302 9.15885 10.6158 9.46753 10.39C9.61535 10.2584 9.73035 10.094 9.80332 9.91006C9.87629 9.72608 9.90522 9.52759 9.88778 9.33044C9.89768 9.10018 9.85183 8.87093 9.75413 8.66218C9.67126 8.49598 9.5424 8.35707 9.38288 8.26197C9.22131 8.15729 9.03978 8.08726 8.84976 8.0563C8.64359 8.01636 8.43379 7.99819 8.22383 8.00209H5.93097V10.7249H8.40054V10.7145ZM8.53419 15.6759C8.7653 15.679 8.99592 15.6541 9.22101 15.6016C9.42671 15.5562 9.6218 15.4718 9.79571 15.3529C9.96609 15.2341 10.1037 15.0742 10.1959 14.8881C10.3028 14.6508 10.3519 14.3915 10.3392 14.1315C10.3624 13.8946 10.331 13.6555 10.2475 13.4326C10.164 13.2096 10.0305 13.0088 9.85734 12.8455C9.49032 12.5751 9.04054 12.4412 8.58543 12.4668H5.93097V15.6759H8.53419Z"
          fill="#0057FF"
        />
        <path
          d="M16.2268 15.633C16.4176 15.8098 16.6424 15.946 16.8874 16.0333C17.1325 16.1206 17.3928 16.1572 17.6524 16.1408C18.064 16.1512 18.4677 16.026 18.8011 15.7844C19.0723 15.608 19.2778 15.347 19.3854 15.0419H21.3241C21.1176 15.9105 20.6131 16.6793 19.8985 17.2145C19.213 17.6695 18.4028 17.9 17.5804 17.8738C16.9934 17.8815 16.4109 17.7712 15.8674 17.5494C15.3758 17.3443 14.9349 17.0344 14.5755 16.6413C14.2174 16.2293 13.9424 15.752 13.7654 15.2357C13.5668 14.6586 13.4696 14.0514 13.4781 13.4411C13.4744 12.841 13.5749 12.2448 13.7751 11.6791C14.0439 10.8832 14.558 10.193 15.2435 9.70741C15.9291 9.22185 16.7508 8.96593 17.5908 8.97638C18.211 8.96342 18.8242 9.10856 19.3728 9.39813C19.8687 9.67003 20.2964 10.0508 20.6239 10.5119C20.9589 10.9957 21.1991 11.5386 21.3315 12.112C21.4768 12.7277 21.5287 13.3617 21.4852 13.9928H15.7108C15.664 14.5857 15.849 15.1736 16.2268 15.633ZM18.7602 11.2009C18.5987 11.0393 18.4043 10.9142 18.1903 10.834C17.9763 10.7538 17.7475 10.7205 17.5195 10.7361C17.217 10.7246 16.9167 10.7916 16.6478 10.9307C16.4346 11.048 16.2465 11.2059 16.0939 11.3955C15.9587 11.5732 15.858 11.7747 15.7969 11.9895C15.7419 12.1686 15.7075 12.3535 15.6944 12.5404H19.2711C19.2399 12.0531 19.0624 11.5865 18.7617 11.2017L18.7602 11.2009Z"
          fill="#0057FF"
        />
        <path
          d="M19.7147 6.77905H15.2329V7.92474H19.7147V6.77905Z"
          fill="#0057FF"
        />
      </svg>
    </svg>
  );
};

BehanceColor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BehanceColor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default BehanceColor;

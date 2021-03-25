import React from 'react';
import PropTypes from 'prop-types';

const SettingsDuotoneS = props => {
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
          opacity="0.8"
          d="M10.5 3.75V3C10.1298 3 9.81501 3.27008 9.75872 3.63596L10.5 3.75ZM10.2333 5.48356L10.4291 6.20754C10.7156 6.13006 10.9294 5.89093 10.9746 5.5976L10.2333 5.48356ZM13.5 3.75L14.2413 3.63596C14.185 3.27008 13.8702 3 13.5 3V3.75ZM13.7667 5.48356L13.0254 5.5976C13.0705 5.89093 13.2844 6.13006 13.5709 6.20754L13.7667 5.48356ZM15.3583 6.14342L14.9846 6.7937C15.2419 6.9415 15.562 6.92382 15.8014 6.74859L15.3583 6.14342ZM16.77 5.10999L17.3003 4.57966C17.0387 4.31806 16.6255 4.28629 16.327 4.50482L16.77 5.10999ZM18.89 7.22999L19.4952 7.67301C19.7137 7.37451 19.6819 6.96125 19.4203 6.69966L18.89 7.22999ZM17.8566 8.64163L17.2514 8.19861C17.0762 8.43797 17.0585 8.75813 17.2063 9.01533L17.8566 8.64163ZM18.5164 10.2333L17.7925 10.4291C17.8699 10.7156 18.1091 10.9294 18.4024 10.9746L18.5164 10.2333ZM20.25 10.5H21C21 10.1298 20.7299 9.81501 20.364 9.75872L20.25 10.5ZM20.25 13.5L20.364 14.2413C20.7299 14.185 21 13.8702 21 13.5H20.25ZM18.5164 13.7667L18.4024 13.0254C18.1091 13.0705 17.8699 13.2844 17.7925 13.5709L18.5164 13.7667ZM17.8566 15.3584L17.2063 14.9847C17.0585 15.2419 17.0762 15.562 17.2514 15.8014L17.8566 15.3584ZM18.89 16.77L19.4203 17.3003C19.6819 17.0387 19.7137 16.6255 19.4952 16.327L18.89 16.77ZM16.77 18.89L16.327 19.4952C16.6255 19.7137 17.0387 19.6819 17.3003 19.4203L16.77 18.89ZM15.3584 17.8566L15.8014 17.2514C15.562 17.0762 15.2419 17.0585 14.9847 17.2063L15.3584 17.8566ZM13.7667 18.5164L13.5709 17.7925C13.2844 17.8699 13.0705 18.1091 13.0254 18.4024L13.7667 18.5164ZM13.5 20.25V21C13.8702 21 14.185 20.7299 14.2413 20.364L13.5 20.25ZM10.5 20.25L9.75872 20.364C9.81501 20.7299 10.1298 21 10.5 21V20.25ZM10.2333 18.5164L10.9746 18.4024C10.9294 18.1091 10.7156 17.8699 10.4291 17.7925L10.2333 18.5164ZM8.64163 17.8566L9.01533 17.2063C8.75813 17.0585 8.43797 17.0762 8.19861 17.2514L8.64163 17.8566ZM7.22999 18.89L6.69966 19.4203C6.96125 19.6819 7.37451 19.7137 7.67301 19.4952L7.22999 18.89ZM5.10999 16.77L4.50482 16.327C4.28629 16.6255 4.31806 17.0387 4.57966 17.3003L5.10999 16.77ZM6.14342 15.3583L6.74859 15.8014C6.92382 15.562 6.9415 15.2419 6.7937 14.9846L6.14342 15.3583ZM5.48356 13.7667L6.20754 13.5709C6.13006 13.2844 5.89093 13.0705 5.5976 13.0254L5.48356 13.7667ZM3.75 13.5H3C3 13.8702 3.27008 14.185 3.63596 14.2413L3.75 13.5ZM3.75 10.5L3.63596 9.75872C3.27008 9.81501 3 10.1298 3 10.5H3.75ZM5.48356 10.2333L5.5976 10.9746C5.89093 10.9294 6.13006 10.7156 6.20754 10.4291L5.48356 10.2333ZM6.14343 8.64165L6.7937 9.01534C6.94151 8.75814 6.92383 8.43798 6.7486 8.19862L6.14343 8.64165ZM5.10999 7.22999L4.57966 6.69966C4.31806 6.96125 4.28629 7.37451 4.50482 7.67301L5.10999 7.22999ZM7.22999 5.10999L7.67301 4.50482C7.37451 4.28629 6.96125 4.31806 6.69966 4.57966L7.22999 5.10999ZM8.64165 6.14343L8.19862 6.7486C8.43798 6.92383 8.75814 6.94151 9.01534 6.7937L8.64165 6.14343ZM9.75872 3.63596L9.49202 5.36951L10.9746 5.5976L11.2413 3.86404L9.75872 3.63596ZM13.5 3H10.5V4.5H13.5V3ZM14.508 5.36951L14.2413 3.63596L12.7587 3.86404L13.0254 5.5976L14.508 5.36951ZM15.732 5.49315C15.1824 5.17732 14.5888 4.92895 13.9625 4.75957L13.5709 6.20754C14.0709 6.34278 14.5451 6.54113 14.9846 6.7937L15.732 5.49315ZM16.327 4.50482L14.9153 5.53826L15.8014 6.74859L17.213 5.71515L16.327 4.50482ZM19.4203 6.69966L17.3003 4.57966L16.2397 5.64032L18.3597 7.76032L19.4203 6.69966ZM18.4617 9.08466L19.4952 7.67301L18.2848 6.78696L17.2514 8.19861L18.4617 9.08466ZM19.2404 10.0375C19.071 9.4112 18.8227 8.81754 18.5068 8.26794L17.2063 9.01533C17.4589 9.45483 17.6572 9.92909 17.7925 10.4291L19.2404 10.0375ZM18.4024 10.9746L20.136 11.2413L20.364 9.75872L18.6305 9.49202L18.4024 10.9746ZM19.5 10.5V13.5H21V10.5H19.5ZM20.136 12.7587L18.4024 13.0254L18.6305 14.508L20.364 14.2413L20.136 12.7587ZM18.5068 15.732C18.8227 15.1825 19.071 14.5888 19.2404 13.9625L17.7925 13.5709C17.6572 14.0709 17.4589 14.5452 17.2063 14.9847L18.5068 15.732ZM19.4952 16.327L18.4617 14.9153L17.2514 15.8014L18.2848 17.213L19.4952 16.327ZM17.3003 19.4203L19.4203 17.3003L18.3597 16.2397L16.2397 18.3597L17.3003 19.4203ZM14.9153 18.4617L16.327 19.4952L17.213 18.2848L15.8014 17.2514L14.9153 18.4617ZM13.9625 19.2404C14.5888 19.071 15.1825 18.8227 15.732 18.5068L14.9847 17.2063C14.5452 17.4589 14.0709 17.6572 13.5709 17.7925L13.9625 19.2404ZM13.0254 18.4024L12.7587 20.136L14.2413 20.364L14.508 18.6305L13.0254 18.4024ZM13.5 19.5H10.5V21H13.5V19.5ZM11.2413 20.136L10.9746 18.4024L9.49202 18.6305L9.75872 20.364L11.2413 20.136ZM8.26794 18.5068C8.81754 18.8227 9.4112 19.071 10.0375 19.2404L10.4291 17.7925C9.92909 17.6572 9.45483 17.4589 9.01533 17.2063L8.26794 18.5068ZM7.67301 19.4952L9.08466 18.4617L8.19861 17.2514L6.78696 18.2848L7.67301 19.4952ZM4.57966 17.3003L6.69966 19.4203L7.76032 18.3597L5.64032 16.2397L4.57966 17.3003ZM5.53826 14.9153L4.50482 16.327L5.71515 17.213L6.74859 15.8014L5.53826 14.9153ZM4.75957 13.9625C4.92895 14.5888 5.17732 15.1824 5.49315 15.732L6.7937 14.9846C6.54113 14.5451 6.34278 14.0709 6.20754 13.5709L4.75957 13.9625ZM5.5976 13.0254L3.86404 12.7587L3.63596 14.2413L5.36951 14.508L5.5976 13.0254ZM4.5 13.5V10.5H3V13.5H4.5ZM3.86404 11.2413L5.5976 10.9746L5.36951 9.49202L3.63596 9.75872L3.86404 11.2413ZM5.49316 8.26796C5.17732 8.81755 4.92895 9.4112 4.75957 10.0375L6.20754 10.4291C6.34278 9.9291 6.54113 9.45484 6.7937 9.01534L5.49316 8.26796ZM4.50482 7.67301L5.53826 9.08468L6.7486 8.19862L5.71515 6.78696L4.50482 7.67301ZM6.69966 4.57966L4.57966 6.69966L5.64032 7.76032L7.76032 5.64032L6.69966 4.57966ZM9.08468 5.53826L7.67301 4.50482L6.78696 5.71515L8.19862 6.7486L9.08468 5.53826ZM10.0375 4.75957C9.4112 4.92895 8.81755 5.17732 8.26796 5.49316L9.01534 6.7937C9.45484 6.54113 9.9291 6.34278 10.4291 6.20754L10.0375 4.75957Z"
          fill="#4400FF"
        />
        <circle
          opacity="0.8"
          cx="12"
          cy="12"
          r="2.75"
          stroke="#34D399"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
};

SettingsDuotoneS.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SettingsDuotoneS.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SettingsDuotoneS;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const LogoXiaomiCl = props => {
  const {
    color,
    size,
    spin,
    style,
    className,
    iconClassName,
    ...otherProps
  } = props;
  return (
    <span
      role="img"
      className={
        className
          ? 'tant-icon-span anticon ' + className
          : 'tant-icon-span anticon'
      }
    >
      <style children={loadingCircleStyle} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        {...otherProps}
        className={iconClassName}
        style={{
          ...style,
          ...(spin
            ? {
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationName: 'loadingCircle',
                animationTimingFunction: 'linear'
              }
            : {})
        }}
      >
        <path
          d="M16.8 0A7.2 7.2 0 0124 7.2v9.6a7.2 7.2 0 01-7.2 7.2H7.2A7.2 7.2 0 010 16.8V7.2A7.2 7.2 0 017.2 0h9.6zm-4.387 7.512H5.358a.1.1 0 00-.098.1v8.733a.099.099 0 00.098.1h1.885a.1.1 0 00.098-.1V9.49a.1.1 0 01.098-.101h4.053c.76 0 1.378.633 1.378 1.413v5.542a.1.1 0 00.098.1h1.857a.1.1 0 00.07-.03.1.1 0 00.028-.07v-6.258c0-1.422-1.124-2.575-2.51-2.575zm-1.394 3.48H9.135a.101.101 0 00-.07.03.1.1 0 00-.028.07v5.253a.1.1 0 00.098.1h1.884c.026 0 .051-.01.07-.029a.102.102 0 00.028-.071v-5.252a.102.102 0 00-.06-.094.095.095 0 00-.038-.007zm7.534-3.48h-1.884a.1.1 0 00-.099.102v8.73a.1.1 0 00.1.101h1.883a.1.1 0 00.098-.1V7.613a.102.102 0 00-.06-.093.097.097 0 00-.038-.007z"
          fill="#FF6A00"
        ></path>
      </svg>
    </span>
  );
};

LogoXiaomiCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoXiaomiCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default LogoXiaomiCl;

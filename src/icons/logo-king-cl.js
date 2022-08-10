import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const LogoKingCl = props => {
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
          d="M2.173.094H21.59a2.109 2.109 0 012.103 2.103v4.54c-3.727-.029-8.463.892-11.293 1.98-3.553 1.366-5.62 2.617-6.625 3.946-1.003 1.329.955 1.794 2.855 1.807 1.9.013 3.516-1.418 6.475-3.123 2.308-1.33 5.467-2.564 8.588-3.583v7.576c-1.524-.779-3.363-1.322-7.22-1.121-4.219.218-10.004 1.285-13.53 3.714 4.23-.33 9.327-.38 12.969-.27 3.02.09 5.818 1.28 7.78 1.187v2.763a2.109 2.109 0 01-2.102 2.103H2.173A2.109 2.109 0 01.07 21.613v-5.65a113.965 113.965 0 014.765-4.345c2.745-2.382 6.512-4.297 7.273-5.285.76-.987-1.588-2.488-3.292-2.174-1.705.314-3.194 2.053-5.788 4.517-.953.906-1.994 2.141-2.958 3.516V2.197A2.109 2.109 0 012.173.094z"
          fill="#E30016"
        ></path>
      </svg>
    </span>
  );
};

LogoKingCl.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LogoKingCl.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default LogoKingCl;

import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Sql2 = props => {
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
        <path d="M8.066 13.008c0-.221-.078-.39-.234-.508-.156-.12-.437-.245-.844-.375a6.084 6.084 0 01-.965-.39c-.645-.35-.968-.82-.968-1.41 0-.308.086-.582.258-.821.174-.242.423-.431.746-.566.325-.136.69-.204 1.093-.204.407 0 .769.075 1.086.223.318.146.564.353.739.621.177.268.265.573.265.914H8.07c0-.26-.082-.462-.246-.605-.164-.146-.394-.219-.691-.219-.287 0-.51.061-.668.184a.568.568 0 00-.238.476c0 .185.092.34.277.465.187.125.462.242.824.352.667.2 1.152.449 1.457.746.305.296.457.666.457 1.109 0 .492-.186.879-.558 1.16-.373.279-.874.418-1.504.418-.438 0-.836-.08-1.196-.238-.359-.162-.634-.382-.824-.66a1.694 1.694 0 01-.281-.97h1.176c0 .628.375.942 1.125.942.278 0 .496-.056.652-.168a.558.558 0 00.234-.476z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.703 11.785c0 .531-.086.994-.258 1.387a2.38 2.38 0 01-.715.941l.946.742-.746.66-1.211-.972a2.568 2.568 0 01-.43.035c-.471 0-.892-.113-1.262-.34a2.26 2.26 0 01-.859-.968c-.203-.422-.306-.907-.309-1.454v-.28c0-.56.1-1.053.301-1.477.203-.427.488-.754.856-.98.37-.23.791-.345 1.265-.345.474 0 .895.115 1.262.344.37.227.655.554.855.98.204.425.305.916.305 1.473v.254zm-1.187-.258c0-.596-.107-1.05-.32-1.359-.214-.31-.519-.465-.915-.465-.393 0-.696.154-.91.461-.213.305-.322.753-.324 1.344v.277c0 .58.107 1.031.32 1.352.214.32.521.48.922.48.393 0 .695-.154.906-.46.211-.31.318-.761.32-1.352v-.278z"
        ></path>
        <path d="M19.223 13.559h-2.489V8.813h-1.172V14.5h3.66v-.941z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h16V5H4z"
        ></path>
      </svg>
    </span>
  );
};

Sql2.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Sql2.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Sql2;

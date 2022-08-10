import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const Backup = props => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.814 4C8.57 4 5.085 7.183 4.7 11.25h1.593L3.646 15 1 11.25h1.656C3.046 6.077 7.446 2 12.814 2 18.439 2 23 6.477 23 12s-4.56 10-10.186 10a10.247 10.247 0 01-7.592-3.333.987.987 0 01.08-1.412 1.032 1.032 0 011.438.078A8.193 8.193 0 0012.814 20c4.5 0 8.149-3.582 8.149-8s-3.649-8-8.15-8zm-1.019 4c0-.552.456-1 1.019-1a1.01 1.01 0 011.018 1v4.153c0 .269.11.527.306.715l2.488 2.39c.425.409.428 1.08.008 1.492-.42.413-1.104.41-1.52-.008l-2.737-2.745a1.981 1.981 0 01-.582-1.399V8z"
        ></path>
      </svg>
    </span>
  );
};

Backup.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Backup.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default Backup;

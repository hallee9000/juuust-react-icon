import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const StringSm = props => {
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
        viewBox="0 0 16 16"
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
        <path d="M10.247 11.5c.32 0 .572-.056.753-.168v-.856a.996.996 0 01-.321.065c-.165 0-.263-.06-.296-.182a3.144 3.144 0 01-.037-.57V6.34c0-.39-.07-.705-.21-.947a1.466 1.466 0 00-.556-.557 2.1 2.1 0 00-.778-.272 5.574 5.574 0 00-.851-.065 4.34 4.34 0 00-1.025.117 2.366 2.366 0 00-.84.389 1.88 1.88 0 00-.592.687c-.148.285-.23.635-.247 1.05h1.05c.024-.493.184-.826.48-.999.297-.181.667-.272 1.112-.272.164 0 .33.013.494.04.173.025.325.077.457.155.14.077.25.19.333.337.09.147.136.341.136.583 0 .207-.058.367-.173.48a1.23 1.23 0 01-.47.246 5.645 5.645 0 01-.69.13c-.256.026-.527.069-.816.13-.271.051-.539.116-.802.194a2.2 2.2 0 00-.691.35 1.642 1.642 0 00-.482.583c-.123.242-.185.553-.185.933 0 .337.053.627.16.869.116.233.268.423.457.57.19.147.412.255.667.324.263.07.54.104.827.104.445 0 .856-.078 1.235-.233a2.569 2.569 0 001.012-.791c0 .363.078.626.235.79.164.156.382.234.654.234zm-1.47-3.37c.215-.052.388-.13.52-.234v1.128c0 .156-.038.324-.112.506-.074.172-.19.337-.345.492a2.013 2.013 0 01-.605.376 2.478 2.478 0 01-.89.143c-.164 0-.32-.018-.468-.052a1.177 1.177 0 01-.396-.169 1.025 1.025 0 01-.271-.298 1.02 1.02 0 01-.099-.466c0-.277.058-.493.173-.649.123-.164.28-.29.47-.376.188-.086.402-.146.641-.181.239-.043.473-.078.704-.104.238-.034.465-.073.679-.116z"></path>
        <path d="M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0012.5 2h-9zM3 3.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-9z"></path>
      </svg>
    </span>
  );
};

StringSm.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StringSm.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default StringSm;

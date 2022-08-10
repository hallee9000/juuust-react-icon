import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ReportRemoval = props => {
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
        <path d="M7 13h2v4H7v-4z"></path>
        <path d="M2.808 2.808L1.393 4.222 3 5.828v15.18a1 1 0 00.993.992h15.179l.606.607.77-.771a1.001 1.001 0 00.288-.287l.356-.357L2.808 2.808zM11 17h2v-1.171L17.172 20H5V7.828l6 6V17z"></path>
        <path d="M4.828 2l2 2H15v4h4v8.172l2 2V7l-5-5H4.828z"></path>
        <path d="M17 14.172V11h-2v1.172l2 2z"></path>
        <path d="M13 10.172V7h-2v1.172l2 2z"></path>
      </svg>
    </span>
  );
};

ReportRemoval.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ReportRemoval.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ReportRemoval;

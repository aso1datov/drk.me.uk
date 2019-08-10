/**
 * Vendor
 */

import React from 'react';
import cn from 'classnames';

/**
 * Typings
 */

import { IButton } from './interfaces';

type IButtonProps = IButton;

/**
 * Expo
 */

const Button: React.FC<IButtonProps> = ({
  type,
  className,
  onClick,
  children,
  ...props
}) => (
  <button
    type={type}
    className={cn('button', className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

export default Button;

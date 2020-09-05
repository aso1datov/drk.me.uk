/**
 * Vendor
 */

import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

/**
 * Typings
 */

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

/**
 * Expo
 */

const Button: React.FC<ButtonProps> = ({ type = 'button', className, onClick, children, ...props }) => (
  <button type={type} className={cn('button', className)} onClick={onClick} {...props}>
    {children}
  </button>
);

export default Button;

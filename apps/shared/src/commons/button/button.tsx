'use client';

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { button } from './button.variants';

export type ButtonType = 'primary' | 'secondary' | 'none';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeStyle?: ButtonType;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ typeStyle = 'primary', disabled = false, children, ...props }, ref) => (
    <button
      ref={ref}
      className={button({ type: typeStyle, disabled })}
      disabled={disabled}
      aria-disabled={disabled}
      tabIndex={0}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button';

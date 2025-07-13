import React from 'react';
import { link } from './link.variants';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  color?: 'primary' | 'secondary' | 'inherit';
  underline?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      color = 'primary',
      underline = false,
      size = 'md',
      className = '',
      children,
      ...props
    },
    ref,
  ) => (
    <a
      ref={ref}
      className={
        link({ color, underline, size }) + (className ? ` ${className}` : '')
      }
      tabIndex={0}
      {...props}
    >
      {children}
    </a>
  ),
);

Link.displayName = 'Link';

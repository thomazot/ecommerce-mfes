import React from 'react';
import { link } from './link.variants';

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  underline?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
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
        link({ underline, size }) + (className ? ` ${className}` : '')
      }
      tabIndex={0}
      {...props}
    >
      {children}
    </a>
  ),
);

Link.displayName = 'Link';

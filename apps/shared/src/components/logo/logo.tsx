import React from 'react';
import { logo } from './logo.variants';
import { Link } from '../../commons/link';

export type LogoProps = {
  className?: string;
  color?: 'default' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  'aria-label'?: string;
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  color = 'default',
  size = 'md',
  'aria-label': ariaLabel = 'Home',
}) => (
  <Link
    href="/"
    className={logo({ color, size }) + (className ? ` ${className}` : '')}
    aria-label={ariaLabel}
    tabIndex={0}
  >
    <span aria-hidden="true">🛒</span>
    <span>Ecommerce</span>
  </Link>
);

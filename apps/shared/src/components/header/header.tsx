'use client';

import { Logo } from '../logo';
import { Search } from '../search';
import { Menu } from '../menu';
import { Cart } from '../cart';
import { container } from './header.variants';

type HeaderProps = {
  minimal?: boolean;
};

export const Header = ({ minimal }: HeaderProps) => {
  return (
    <header className="w-full" role="banner">
      <div className={container({ minimal })}>
        {/* Logo */}
        <Logo />
        {!minimal && (
          <>
            <Search />
            <Menu />
            <Cart />
          </>
        )}
      </div>
    </header>
  );
};

'use client';

import { useState } from 'react';
import { Logo } from '../logo';
import { Search } from '../search';
import { Menu } from '../menu';
import { Cart } from '../cart';

export const Header = () => {
  const [search, setSearch] = useState('');
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <header className="w-full" role="banner">
      {/* Logo */}
      <Logo />
      {/* Search */}
      <Search
        value={search}
        onChange={handleSearchChange}
        onSubmit={() => false}
        className="mx-4 flex-1"
      />
      {/* Menu + Cart */}
      <Menu />
      <Cart />
    </header>
  );
};

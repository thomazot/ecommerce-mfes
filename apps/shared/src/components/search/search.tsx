import React from 'react';
import { search, searchInput } from './search.variants';
import { Button } from '../../commons/button';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export type SearchProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
};

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  onSubmit,
  className = '',
}) => (
  <form
    className={search() + (className ? ` ${className}` : '')}
    role="search"
    aria-label="Product search"
    onSubmit={onSubmit}
  >
    <input
      type="search"
      className={searchInput()}
      placeholder="Search products..."
      value={value}
      onChange={onChange}
      aria-label="Search products"
    />
    <Button
      type="submit"
      aria-label="Search"
      className="ml-2 p-2 text-primary"
      typeStyle="none"
    >
      <MagnifyingGlassIcon className="w-5 h-5" />
    </Button>
  </form>
);

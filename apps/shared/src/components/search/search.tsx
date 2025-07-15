import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getProductsByTerm } from '../../services/products';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '../../commons/button';
import { Product } from '../../schemas/products';
import {
  search,
  searchForm,
  searchInput,
  searchButton,
  searchDropdown,
  searchOption,
} from './search.variants';
import { useDebounce } from '../../hooks/useDebounce';

// Definir tipo diretamente
type SearchState = 'IDLE' | 'TYPING' | 'SHOWING' | 'SUBMITTED' | 'ERROR';

type SearchProps = {
  className?: string;
};

export const Search: React.FC<SearchProps> = ({ className = '' }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [state, setState] = useState<SearchState>('IDLE');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const debouncedValue = useDebounce(inputValue);

  // Transições de estado
  useEffect(() => {
    if (!inputValue) {
      setState('IDLE');
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    setState('TYPING');
  }, [inputValue]);

  useEffect(() => {
    if (state === 'TYPING' && debouncedValue) {
      getProductsByTerm(debouncedValue)
        .then((results) => {
          setSuggestions(results.slice(0, 5));
          setShowSuggestions(true);
          setState('SHOWING');
        })
        .catch(() => {
          setSuggestions([]);
          setShowSuggestions(false);
          setState('ERROR');
        });
    }
    if (!debouncedValue) {
      setSuggestions([]);
      setShowSuggestions(false);
      setState('IDLE');
    }
  }, [debouncedValue, state]);

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setActiveIndex(-1);
  };

  const handleSuggestionClick = (suggestion: Product) => {
    setInputValue(suggestion.title);
    setShowSuggestions(false);
    setState('SUBMITTED');
    router.push(`/search?term=${encodeURIComponent(suggestion.title)}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setShowSuggestions(false);
    setState('SUBMITTED');
    router.push(`/search?term=${encodeURIComponent(inputValue.trim())}`);
  };

  // Object literal para handlers de teclado
  const keyHandlers: Record<string, () => void> = {
    ArrowDown: () =>
      setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0)),
    ArrowUp: () =>
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1)),
    Enter: () => {
      if (activeIndex >= 0) handleSuggestionClick(suggestions[activeIndex]);
    },
    Escape: () => setShowSuggestions(false),
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || !suggestions.length) return;
    if (keyHandlers[e.key]) {
      e.preventDefault();
      keyHandlers[e.key]();
    }
  };

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const el = listRef.current.children[activeIndex] as HTMLElement;
      el?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  return (
    <div
      className={`${search()} ${className}`}
      role="combobox"
      aria-expanded={showSuggestions}
      aria-owns="search-suggestion-list"
      aria-haspopup="listbox"
    >
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Buscar produtos"
        className={searchForm()}
      >
        <input
          ref={inputRef}
          type="search"
          className={searchInput()}
          placeholder="Buscar produtos..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          aria-label="Buscar produtos"
          aria-autocomplete="list"
          aria-controls="search-suggestion-list"
          aria-activedescendant={
            activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined
          }
          autoComplete="off"
          tabIndex={0}
        />
        <Button
          type="submit"
          aria-label="Buscar"
          className={searchButton()}
          typeStyle="none"
        >
          <MagnifyingGlassIcon className="w-5 h-5" />
        </Button>
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <ul
          id="search-suggestion-list"
          ref={listRef}
          role="listbox"
          className={searchDropdown()}
        >
          {suggestions.map((suggestion, idx) => (
            <li
              key={suggestion.id}
              id={`suggestion-${idx}`}
              role="option"
              aria-selected={activeIndex === idx}
              className={searchOption(activeIndex === idx)}
              onMouseDown={() => handleSuggestionClick(suggestion)}
              tabIndex={-1}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

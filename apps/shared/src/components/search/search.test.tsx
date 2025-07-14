import "@testing-library/jest-dom"
import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './search';

describe('Search', () => {
  it('should render input and button', () => {
    render(<Search value="" onChange={() => {}} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('should call onChange when typing', () => {
    const handleChange = jest.fn();
    render(<Search value="" onChange={handleChange} />);
    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'abc' },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  it('should call onSubmit when submitting', () => {
    const handleSubmit = jest.fn((e: React.FormEvent<HTMLFormElement>) =>
      e.preventDefault(),
    );
    render(<Search value="abc" onChange={() => {}} onSubmit={handleSubmit} />);
    fireEvent.submit(screen.getByRole('search'));
    expect(handleSubmit).toHaveBeenCalled();
  });
});

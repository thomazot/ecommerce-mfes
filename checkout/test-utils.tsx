import { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Providers } from './app/providers';

const customRender = (ui: ReactNode, options?: RenderOptions) =>
  render(<Providers>{ui}</Providers>, options);

export * from '@testing-library/react';
export { customRender as render }; 
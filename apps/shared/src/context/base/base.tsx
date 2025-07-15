'use client';

import React, { useContext, useMemo } from 'react';
import { Categories } from '../../schemas/category';

type BaseContextType = {
  menu: Categories;
};

const BaseContextDefault: BaseContextType = {
  menu: [],
};

const BaseContext = React.createContext<BaseContextType>(BaseContextDefault);

type BaseProviderProps = {
  children?: React.ReactNode;
  menu?: Categories;
};

export function BaseProvider({ children, menu }: BaseProviderProps) {
  const values = useMemo(() => ({ menu: menu ?? [] }), [menu]);

  return <BaseContext.Provider value={values}>{children}</BaseContext.Provider>;
}

export const useBase = () => {
  const context = useContext(BaseContext);

  if (!context) {
    throw new Error('useBase deve ser usado dentro de um BaseProvider');
  }

  return context;
};

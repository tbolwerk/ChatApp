import React, { useState, createContext, Dispatch, SetStateAction, useContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface IFavoriteFilterContext {
  filterOn: boolean;
  setFilterOn: Dispatch<SetStateAction<boolean>>;
}

const initialFavoriteFilterContextValue = {
  filterOn: false,
  setFilterOn: undefined,
};

const FavoriteFilterContext = createContext<IFavoriteFilterContext>(
  initialFavoriteFilterContextValue,
);

export const FavoriteFilterContainer = ({ children }: Props) => {
  const [filterOn, setFilterOn] = useState(false);

  return (
    <FavoriteFilterContext.Provider value={{ filterOn, setFilterOn }}>
      {children}
    </FavoriteFilterContext.Provider>
  );
};

export const useFavoriteFilter = () => useContext(FavoriteFilterContext);

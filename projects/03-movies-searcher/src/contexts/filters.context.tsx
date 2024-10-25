import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

const defaultFilterContext: FiltersState = {
  filters: {
    search: "",
    sort: false,
  },
  setFilters: () => {},
};

export const FiltersContext = createContext<FiltersState>(defaultFilterContext);

export function FilterProvider({ children }: FilterContextProps) {
  const [filters, setFilters] = useState<Filters>(defaultFilterContext.filters);
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

interface FilterContextProps {
  children: ReactElement;
}

interface FiltersState {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

interface Filters {
  search: string;
  sort?: boolean;
}

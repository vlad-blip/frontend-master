import { createContext } from "react";

const initialState = {
  filters: [],
  onAddFilters: () => {},
  onRemoveFilters: () => {},
  onClearFilters: () => {},
};
export const FilterContext = createContext(initialState);

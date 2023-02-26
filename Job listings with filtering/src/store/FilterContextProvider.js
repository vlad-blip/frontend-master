import { useState } from "react";
import { FilterContext } from ".";

const FilterContextProvider = (props) => {
  const [filters, setFilters] = useState([]);

  const addFiltersHandler = (filter) => {
    if (!filters.includes(filter)) {
      setFilters((prevFilters) => [...prevFilters, filter]);
    }
  };
  const removeFiltersHandler = (filter) => {
    const newFilters = [...filters].filter((tag) => tag !== filter);
    setFilters(newFilters);
  };
  const clearFiltersHandler = () => {
    setFilters([]);
  };

  const filter = {
    filters,
    onAddFilters: addFiltersHandler,
    onRemoveFilters: removeFiltersHandler,
    onClearFilters: clearFiltersHandler,
  };
  return (
    <FilterContext.Provider value={filter}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

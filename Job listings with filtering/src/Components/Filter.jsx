import classes from "./Filter.module.css";
import { useContext } from "react";
import { FilterContext } from "../store";

const Filter = (props) => {
  const context = useContext(FilterContext);
  const filters = context.filters;

  const removeFilterHandler = (event) => {
    context.onRemoveFilters(event.target.value);
  };

  const clearFilterHandler = () => {
    context.onClearFilters();
  };

  return (
    <div className={classes.tags_container}>
      <ul className={classes.tags}>
        {filters.map((filter) => (
          <li className={classes.tag}>
            <span>
              {filter}
              <button onClick={removeFilterHandler} value={filter}>
                X
              </button>
            </span>
          </li>
        ))}
      </ul>
      <button className={classes.button} onClick={clearFilterHandler}>
        Clear
      </button>
    </div>
  );
};

export default Filter;

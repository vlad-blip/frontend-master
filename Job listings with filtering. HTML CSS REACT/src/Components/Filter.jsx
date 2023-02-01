import classes from "./Filter.module.css";

const Filter = (props) => {
  return (
    <div className={classes.tags_container}>
      <ul className={classes.tags}>
        <li className={classes.tag}>
          <span>
            Frontend<button>X</button>
          </span>
        </li>
        <li className={classes.tag}>
          <span>
            CSS<button>X</button>
          </span>
        </li>
        <li className={classes.tag}>
          <span>
            JavaScript<button>X</button>
          </span>
        </li>
      </ul>
      <button className={classes.button}>Clear</button>
    </div>
  );
};

export default Filter;

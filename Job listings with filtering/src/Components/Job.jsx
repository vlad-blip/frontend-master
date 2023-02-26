import classes from "./Job.module.css";
import ReactLogo from "../assets/images/shortly.svg";
import { FilterContext } from "../store";
import { useContext } from "react";

const Job = ({
  company,
  logo,
  new: isNew,
  featured: isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  const context = useContext(FilterContext);

  const addFilterHandler = (event) => {
    context.onAddFilters(event.target.value);
  };

  const containerStyle = `
    ${classes.job_container} ${isFeatured ? classes.featured : ""}`;
  return (
    <li>
      <div className={containerStyle}>
        <div className={classes.job_main}>
          <img src={ReactLogo} className={classes.job_logo} alt="Job logo" />
          <div className={classes.job_info}>
            <div className={classes.job_heading}>
              <h3 className={classes.job_company}>{company}</h3>
              <div className={classes.job_more}>
                {isNew && (
                  <span className={`${classes.job_misc} ${classes.job_new}`}>
                    New!
                  </span>
                )}
                {isFeatured && (
                  <span
                    className={`${classes.job_misc} ${classes.job_featured}`}
                  >
                    Featured
                  </span>
                )}
              </div>
            </div>

            <h2 className={classes.job_title}>
              <a href="/">{position}</a>
            </h2>

            <ul className={classes.job_additionals}>
              <li className={classes.job_additional}>{postedAt}</li>
              <li className={classes.job_additional}>{contract}</li>
              <li className={classes.job_additional}>{location}</li>
            </ul>
          </div>
        </div>
        <ul className={classes.job_tags}>
          <li>
            <button
              className={classes.job_tag}
              onClick={addFilterHandler}
              value={role}
            >
              {role}
            </button>
          </li>
          <li>
            <button
              className={classes.job_tag}
              onClick={addFilterHandler}
              value={level}
            >
              {level}
            </button>
          </li>
          {languages.map((language) => (
            <li>
              <button
                className={classes.job_tag}
                onClick={addFilterHandler}
                value={language}
              >
                {language}
              </button>
            </li>
          ))}
          {tools.map((tool) => (
            <li>
              <button
                className={classes.job_tag}
                onClick={addFilterHandler}
                value={tool}
              >
                {tool}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Job;

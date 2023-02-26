import Job from "./Job";
import Filter from "./Filter";
import classes from "./Jobs.module.css";
import { FilterContext } from "../store";
import { useState, useContext, useEffect, useCallback } from "react";

const Jobs = ({ jobs }) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const context = useContext(FilterContext);
  const filters = context.filters;

  const parseTags = (job) => {
    return [job.role, job.level, ...job.languages, ...job.tools];
  };

  const filterJob = useCallback(
    (job) => {
      const tags = parseTags(job);
      for (const tag of tags) {
        if (filters.includes(tag)) {
          return true;
        }
      }
      return false;
    },
    [filters]
  );

  useEffect(() => {
    const filtered = jobs.filter((job) => filterJob(job));
    if (filtered.length === 0) {
      setFilteredJobs(jobs);
      return;
    }
    setFilteredJobs(filtered);
  }, [filters, filterJob, jobs]);

  return (
    <section className={classes.section}>
      {filters.length > 0 && <Filter />}
      <ul className={classes.jobs_container}>
        {filteredJobs.map((job) => (
          <Job key={job.id} {...job} />
        ))}
      </ul>
    </section>
  );
};

export default Jobs;

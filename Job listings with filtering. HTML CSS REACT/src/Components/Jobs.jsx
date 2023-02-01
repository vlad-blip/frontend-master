import Job from "./Job";
import Filter from "./Filter";
import classes from "./Jobs.module.css";

const Jobs = ({ jobs }) => {
  return (
    <section className={classes.section}>
      <Filter />
      <ul className={classes.jobs_container}>
        {jobs.map((job) => (
          <Job key={job.id} {...job} />
        ))}
      </ul>
    </section>
  );
};

export default Jobs;

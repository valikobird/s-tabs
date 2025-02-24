import Job from './Job';

const Jobs = ({ jobs }) => {
  return (
    <section className='jobsContainer'>
      {jobs.map((job) => {
        return <Job {...job} key={job.id} />;
      })}
    </section>
  );
};

export default Jobs;

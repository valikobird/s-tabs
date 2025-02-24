import Duties from './Duties';

const Job = ({ company, dates, duties, title }) => {
  return (
    <article>
      <h3 className='title'>{title}</h3>
      <span className='companyName'>{company}</span>
      <p className='dates'>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default Job;

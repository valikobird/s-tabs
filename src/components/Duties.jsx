import Duty from './Duty';

const Duties = ({ duties }) => {
  return (
    <div className='dutiesContainer'>
      {duties.map((duty, index) => {
        return <Duty text={duty} key={index} />;
      })}
    </div>
  );
};

export default Duties;

import { FaAngleDoubleRight } from 'react-icons/fa';

const Duty = ({ text }) => {
  return (
    <div className='duty'>
      <div>
        <FaAngleDoubleRight className='icon' />
      </div>
      <div className='text'>{text}</div>
    </div>
  );
};

export default Duty;

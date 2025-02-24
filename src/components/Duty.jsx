import { HiChevronDoubleRight } from 'react-icons/hi';

const Duty = ({ text }) => {
  return (
    <div className='duty'>
      <div>
        <HiChevronDoubleRight className='icon' />
      </div>
      <div className='text'>{text}</div>
    </div>
  );
};

export default Duty;

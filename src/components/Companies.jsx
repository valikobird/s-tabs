import Company from './Company';

const Companies = ({ companies, activeId, activateCompany }) => {
  return (
    <ul className='companies'>
      {companies.map((company) => {
        const isActive = company === activeId;
        return (
          <Company
            key={company}
            name={company}
            isActive={isActive}
            activateCompany={activateCompany}
          />
        );
      })}
    </ul>
  );
};

export default Companies;

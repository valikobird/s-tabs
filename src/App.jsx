import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Loading from './components/Loading';
import Companies from './components/Companies';
import Jobs from './components/Jobs';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [activeCompany, setActiveCompany] = useState(null);
  const [activeCompanyJobs, setActiveCompanyJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    activateCompany(companies[0]);
  }, [companies]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      let data = await response.json();
      data = data.map((item) => {
        item.id = uuidv4();
        return item;
      });
      setJobs(data);

      const companiesSet = new Set(data.map((job) => job.company));
      const companiesArr = [...companiesSet];
      setCompanies(companiesArr);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const activateCompany = (companyId) => {
    setActiveCompany(companyId);

    const companyJobs = jobs.filter((job) => job.company === companyId);
    setActiveCompanyJobs(companyJobs);
  };

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <div className='container'>
        <Companies
          companies={companies}
          activeId={activeCompany}
          activateCompany={activateCompany}
        />
        <Jobs jobs={activeCompanyJobs} />
      </div>
    </main>
  );
};

export default App;

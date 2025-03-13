
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import JobCard from '../../components/JobCard/JobCard';
import FilterButton from '../../components/FilterButton/FilterButton';
import StatsCard from '../../components/StatsCard/StatsCard';
import CustomSelect from '../../components/ui/CustomSelect';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { mockJobs } from '../../data/mockData';

const HomePage = () => {
  const [activeStatus, setActiveStatus] = useState('all');
  
  const openJobs = mockJobs.filter(job => job.status === 'Open').length;
  const closedJobs = mockJobs.filter(job => job.status === 'Closed').length;
  const onHoldJobs = mockJobs.filter(job => job.status === 'OnHold').length;
  
  const filteredJobs = activeStatus === 'all'
    ? mockJobs
    : mockJobs.filter(job => job.status.toLowerCase() === activeStatus);


    const statusFilters=[
      "By Latest",      "All Status",
      "All Locations",      "All Categories",


    ]
  
  return (
    <div className="min-h-screen flex flex-col ">
      <div className=" mx-auto px-4 py-6 max-w-screen-xl">
        <Header />
        
        <main className="my-6">

        <div className='hidden md:flex justify-between mb-8'>

       
          <div className="flex gap-0.5   shadow">

          <StatsCard label={"OPEN JOBS"} value={openJobs} className={"rounded-l-md "} />
          <StatsCard label={"CLOSED JOBS"} value={closedJobs} className={" "} />
          <StatsCard label={"ONHOLD JOBS"} value={onHoldJobs} className={"rounded-r-md"} />
          
          </div>
          
         
          <div className="flex gap-4 ">
          {statusFilters?.map((item,index)=><CustomSelect key={index} handleChange={()=>{}} options={[]} label={item}/>)}
            {/* <FilterButton label="By Latest" />
            <FilterButton label="All Status" />
            <FilterButton label="All Locations" />
            <FilterButton label="All Categories" /> */}
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredJobs.map(job => (
              <JobCard 
                key={job.id}
                id={job.id}
                title={job.title}
                category={job.category}
                location={job.location}
                type={job.type}
                status={job.status}
                applications={job.applications}
                daysRemaining={job.daysRemaining}
              />
            ))}
          </div>
          
          <div className="  flex  mt-8">
          <button className="p-3 bg-teal-500 text-white rounded-l-xl hover:bg-teal-600 transition-colors">
              <WestIcon/>
            </button>
            <button className="p-3 bg-teal-500 text-white rounded-r-xl hover:bg-teal-600 transition-colors ml-px">
            <EastIcon/>
            </button>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/utils';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const JobCard = ({
  id,
  title,
  category,
  location,
  type,
  status,
  applications,
  daysRemaining,
  className
}) => {
  const statusColors = {
    Open: 'bg-teal-500 text-white',
    Closed: 'bg-gray-800 text-white',
    OnHold: 'bg-gray-400 text-white'
  };

  const categoryColors = {
    Technology: 'bg-gray-900 text-white',
    Marketing: 'bg-gray-800 text-white',
    Medical: 'bg-gray-800 text-white',
    Sales: 'bg-gray-800 text-white',
    Logistics: 'bg-gray-800 text-white'
  };

  return (
    <div className={cn("flex flex-col bg-white rounded-xl pt-6 pb-2 px-3 shadow-sm hover:shadow-md overflow-hidden ", className)}>
      <div className="flex flex-wrap gap-2 mb-3">
        <span className={cn("flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", statusColors[status])}>
          {status === 'OnHold' ? 'On Hold' : status}
        </span>
        <span className={cn("flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", categoryColors[category] || 'bg-gray-800 text-white')}>
          {category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      <div className="flex items-center gap-6 text-gray-500 mb-6 bg-[#F3F6F9] px-4 py-2 rounded-md">
        <div className="flex items-center gap-2">
          <AccessAlarmIcon/>
          <span className="text-xs">{type}</span>
        </div>
        <div className="flex items-center gap-2">
         <LocationOnIcon/>
          <span className="text-xs">{location}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-3">
          <div className='flex gap-1'>
            <span className="block text-4xl font-semibold text-teal-500">{applications}</span>
            <span className="self-end text-xs text-black pb-1 font-medium">Applications</span>
          </div>
          <div className='flex gap-1'>
            <span className="block text-4xl font-semibold text-teal-500">{daysRemaining}</span>
            <span className="self-end  text-xs text-black pb-1 font-medium">
              {daysRemaining === 1 ? 'Day Remaining' : 'Days Remaining'}
            </span>
          </div>
        
        
      </div>

      <Link 
          to={`/jobs/${id}`}
          className="mt-auto justify-self-end flex items-center gap-1   text-teal-500 text-sm font-medium hover:text-teal-600 "
        >
          View Details 
          <ArrowOutwardIcon fontSize='small'/>
        </Link>
    </div>
  );
};

export default JobCard;

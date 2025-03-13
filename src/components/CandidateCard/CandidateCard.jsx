import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/utils';
import { Avatar } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const CandidateCard = ({
  id,
  name,
  image,
  position,
  location,
  status,
  age,
  education,
  yearsExperience,
  applications,
  className
}) => {
  const statusColors = {
    'AVAILABLE': 'bg-teal-500 text-white',
    'HIRED': 'bg-gray-400 text-white',
    'ON LOOKOUT': 'bg-gray-900 text-white'
  };

  return (
    <div className={cn("flex flex-col bg-white rounded-xl p-6 shadow-sm overflow-hidden animate-scale-in", className)}>
      <div className="flex justify-between items-start mb-4">
        <span className={cn("flex items-center rounded-full px-2.5 pt-0.5 text-[10px] font-medium", statusColors[status])}>
          {status}
        </span>
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <span>{age} Yrs Old</span>
          <div className="flex items-center gap-[1px]">
           <LocationOnIcon/>
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
      <Avatar  className='!size-12' >{name[0]}</Avatar>

        <div>
          <div className="text-xs text-gray-500 uppercase">{position}</div>
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
      </div>
      
      {/* <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50">
        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md">
          <div className="text-gray-400">
         LOGO
          </div>
          <div className="text-xs">
            {education ? `${education.degree} · ${education.field}` : 'None'}
          </div>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md">
          <div className="text-gray-400">
            LOGO
          </div>
          <div className="text-xs">
            {yearsExperience} {yearsExperience === 1 ? 'Year' : 'Years'}
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-between gap-6 text-gray-500 mb-6 bg-[#F3F6F9] px-4 py-2 rounded-md">
        <div className="flex items-center gap-2">
          <ArticleIcon/>
          <span className="text-xs">{education ? `${education.degree} · ${education.field}` : 'None'}</span>
        </div>
        <div className="flex items-center gap-2">
          <HourglassBottomIcon/>
          <span className="text-xs">{yearsExperience} {yearsExperience === 1 ? 'Year' : 'Years'}</span>
        </div>
      </div>
      <div className="flex gap-1 items-center justify-between">
        <Link 
          to={`/candidates/${id}`}
          className="text-teal-500 text-sm font-medium hover:text-teal-600 transition-colors"
        >
          View Details 
          <ArrowOutwardIcon fontSize='small'/>

        </Link>
        
        <div>
          <span className="text-3xl font-semibold text-teal-500">{applications}</span>
          <span className="text-xs text-gray-500 ml-1">Applications</span>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;

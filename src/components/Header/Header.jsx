import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserAvatar from '../UserAvatar/UserAvatar';
import { Avatar } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddIcon from '@mui/icons-material/Add';
import { cn } from '../../utils/utils';
const Header = () => {
  const location = useLocation();
  return (
    <div className="w-full px-6 py-4 bg-white rounded-xl shadow-md ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
     DEVELUP
          <nav className="hidden md:flex bg-[#F3F6F9] p-2 rounded-full">
            <Link 
              to="/" 
              className={cn("px-4 py-2 rounded-full text-gray-700  font-medium",`${location.pathname!="/candidates" && "bg-teal-500 text-white"}`)}
            >
              Job Openings
            </Link>
            <Link 
              to="/candidates" 
              
              className={cn(" px-4 py-2 rounded-full text-gray-700 font-medium ml-2 hover:bg-gray-100 ",`${location.pathname==="/candidates" && "bg-teal-500 text-white"}`)}
            >
              Candidates
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link 
            to="/new-candidate"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white font-medium  "
          >
            
            <span className="hidden md:inline">New Candidate</span>
            <PersonAddAltIcon/>
          </Link>
          
          <Link 
            to="/new-job"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500 text-white font-medium  "
          >
            <span className="hidden md:inline">New Job</span>
            <AddIcon/>
          </Link>
          
          <div className="flex items-center gap-2 ml-4">
            <div className="hidden md:block text-right">
              <div className="text-xs text-gray-500">WELCOME BACK</div>
              <div className="text-sm font-medium">Administrator</div>
            </div>
            <Avatar  size="md" >{"D"}</Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

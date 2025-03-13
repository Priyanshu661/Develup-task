import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from '../UserAvatar/UserAvatar';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { mockCandidates } from '../../data/mockData';


const CandidateColumn = () => {
  return (
    <div>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="space-x-1">
          <button className="px-3 py-1 border-b-2 border-teal-500 font-medium">
            Initial Pool
          </button>
          <button className="px-3 py-1 text-gray-500 hover:text-gray-800 ">
            Eliminated
          </button>
          <button className="px-3 py-1 text-gray-500 hover:text-gray-800 ">
            Selected
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-3xl font-bold text-teal-500">14</span>
          <span className="text-sm text-gray-500 ml-2">Candidates</span>
        </div>
        <div>
          <span className="text-3xl font-bold text-teal-500">2</span>
          <span className="text-sm text-gray-500 ml-2">Days Remaining</span>
        </div>
        <button className="p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 ">
          <AddIcon/>
        </button>
      </div>
      
      <div className="space-y-4">
        {mockCandidates.map(candidate => (
          <div 
            key={candidate.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg "
          >
            <div className="flex items-center gap-3">
            <Avatar>{candidate.name[0]}</Avatar>
              <div>
                <div className="text-xs text-gray-500">{candidate.position}</div>
                <div className="font-medium">{candidate.name}</div>
              </div>
            </div>
            <Link
              to={`/candidates/${candidate.id}`}
              className="px-3 py-1 bg-teal-500 text-white text-sm rounded-md hover:bg-teal-600 "
            >
              View Candidate
            </Link>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
            <button className="p-3 bg-teal-500 text-white rounded-l-xl hover:bg-teal-600 ">
              <WestIcon/>
            </button>
            <button className="p-3 bg-teal-500 text-white rounded-r-xl hover:bg-teal-600  ml-px">
            <EastIcon/>
            </button>
          </div>
    </div>
  </div>
  )
}

export default CandidateColumn
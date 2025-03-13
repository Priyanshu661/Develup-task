import React from 'react';
import { cn } from '../../utils/utils';


const FilterButton= ({ label, className }) => {
  return (
    <button className={cn(
      "flex items-center justify-between w-full px-4 py-3 bg-white rounded-md text-sm text-left  ",
      className
    )}>
      <span>{label}</span>
      LOGO
    </button>
  );
};

export default FilterButton;

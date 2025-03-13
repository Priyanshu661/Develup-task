import React from "react";
import { cn } from "../../utils/utils";

const StatsCard = ({label,value,className}) => {
  return (
    <div className={cn("flex gap-2 justify-center items-center  px-6 bg-white ",className)}>
      <div className="text-xs text-gray-500 uppercase">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
};

export default StatsCard;

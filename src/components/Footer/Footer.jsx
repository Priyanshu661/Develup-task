import React from "react";
import BugReportIcon from '@mui/icons-material/BugReport';
const Footer = () => {
  return (
    <footer className="w-full mt-auto py-4 px-6 flex items-center justify-between text-sm text-gray-500">
      <div>2025 H.ARchers - All Rights Reserved - By Zine. E. Falouti</div>
      <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors">
        <span>About H.ARchers AI</span>
        <BugReportIcon/>
      </button>
    </footer>
  );
};

export default Footer;

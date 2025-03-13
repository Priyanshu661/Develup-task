import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CandidateColumn from "../../components/CandidateColumn/CandidateColumn";
import SchoolIcon from "@mui/icons-material/School";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CodeIcon from "@mui/icons-material/Code";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UndoIcon from '@mui/icons-material/Undo';
import { mockJobs } from "../../data/mockData";
const mockJob = {
  id: "5",
  title: "Data Scientist",
  category: "Technology",
  status: "Open",
  company: "Selenium IO",
  postedDate: "2025-01-23",
  postedTime: "09:20",
  location: "Austin-TX",
  type: "Full-time",
  aboutUs:
    "Selenium IO is a leading provider of AI-driven analytics solutions helping businesses make data-driven decisions. We are looking for a highly skilled Data Scientist to join our growing team and help shape the future of data analytics.",
  jobSummary:
    "As a Data Scientist at Selenium IO, you will be responsible for collecting, analyzing, and interpreting large data sets to develop actionable insights and predictive models. You will work closely with cross-functional teams to deliver data-driven strategies and solutions that drive business growth.",
  qualifications: [
    "Master of Science in Data Science",
    "3 Years of experience",
    "Python, R, SQL, Scikit-Learn, Tensor Flow, PyTorch",
  ],
};

const JobDetails = () => {
  const { id } = useParams();
  const [job,setJob]=useState( {
    id: "6",
    title: "Supply Chain Manager",
    category: "Logistics",
    location: "Remote",
    type: "Full-time",
    status: "Closed",
    applications: 32,
    daysRemaining: 1,
    company: "Selenium IO",
    postedDate: "2025-01-23",
    postedTime: "09:20",
    aboutUs:
      "Selenium IO is a leading provider of AI-driven analytics solutions helping businesses make data-driven decisions. We are looking for a highly skilled Data Scientist to join our growing team and help shape the future of data analytics.",
    jobSummary:
      "As a Data Scientist at Selenium IO, you will be responsible for collecting, analyzing, and interpreting large data sets to develop actionable insights and predictive models. You will work closely with cross-functional teams to deliver data-driven strategies and solutions that drive business growth.",
    qualifications: [
      "Master of Science in Data Science",
      "3 Years of experience",
      "Python, R, SQL, Scikit-Learn, Tensor Flow, PyTorch",
    ],
  })

  useEffect(()=>{
    const jobData=mockJobs.find((job)=>job?.id===id);
    setJob(jobData)
  },[id])
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" mx-auto px-4 py-6 max-w-screen-xl">
        <Header />

        <main className="my-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex gap-2 mb-3">
                      <span className="flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-teal-500 text-white">
                        Open
                      </span>
                      <span className="flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-900 text-white">
                        Technology
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold">{job.title}</h1>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex items-center justify-center px-4 py-2 bg-black  rounded-full  text-white hover:bg-teal-600 transition-colors">
                      Put On Hold
                    </button>
                    <button className="px-4 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors">
                      Close Job
                    </button>
<div className="bg-teal-500 flex justify-center items-center px-4 rounded-md"><UndoIcon/></div>
                    
                  </div>
                </div>

                <section className="mb-8 bg-gray-50 p-5 rounded-lg">
                  <h2 className="text-gray-500 uppercase text-sm mb-3">
                    ABOUT US:
                  </h2>
                  <p className="text-gray-800">{job.aboutUs}</p>
                </section>

                <section className="mb-8 bg-gray-50 p-5 rounded-lg">
                  <h2 className="text-gray-500 uppercase text-sm mb-3">
                    JOB SUMMARY:
                  </h2>
                  <p className="text-gray-800">{job.jobSummary}</p>
                </section>

                <section className="mb-8">
                  <h2 className="text-gray-500 uppercase text-sm mb-4">
                    REQUIRED QUALIFICATIONS:
                  </h2>
                  <div className="space-y-4">
                    {job.qualifications.map((qualification, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="text-gray-400">
                          {index === 0 && <SchoolIcon />}
                          {index === 1 && <AccessTimeIcon />}
                          {index === 2 && <CodeIcon />}
                        </div>
                        <span>{qualification}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                  {/* <div className="flex items-center gap-1">
                    LOGO
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    LOGO
                    <span>{job.location}</span>
                  </div> */}
                  <div>
                    Posted by{" "}
                    <span className="text-teal-500">{job.company}</span> on{" "}
                    {job.postedDate} at {job.postedTime}
                  </div>
                  <div className="flex items-center gap-6 text-gray-500  bg-[#F3F6F9] px-4 py-2 rounded-md">
                    <div className="flex items-center gap-2">
                      <AccessAlarmIcon />
                      <span className="text-xs">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LocationOnIcon />
                      <span className="text-xs">{job.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CandidateColumn />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default JobDetails;

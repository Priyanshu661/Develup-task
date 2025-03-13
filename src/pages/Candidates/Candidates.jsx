import React from "react";
import Footer from "../../components/Footer/Footer";
import CandidateCard from "../../components/CandidateCard/CandidateCard";
import FilterButton from "../../components/FilterButton/FilterButton";
import Header from "../../components/Header/Header";
import StatsCard from "../../components/StatsCard/StatsCard";
import CustomSelect from "../../components/ui/CustomSelect";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const mockCandidates = [
  {
    id: "1",
    name: "Mary Doe",
    position: "DATA SCIENTIST",
    location: "Boston-MA",
    status: "AVAILABLE",
    age: 31,
    education: {
      degree: "MSc",
      field: "Computer Science",
    },
    yearsExperience: 7,
    applications: 4,
  },
  {
    id: "2",
    name: "Loyd Treys",
    position: "DEVELOPER",
    location: "Chicago-IL",
    status: "HIRED",
    age: 39,
    education: undefined,
    yearsExperience: 9,
    applications: 796,
  },
  {
    id: "3",
    name: "Justine Craig",
    position: "DATA SCIENTIST",
    location: "Austin-TX",
    status: "AVAILABLE",
    age: 25,
    education: {
      degree: "BA",
      field: "Commerce",
    },
    yearsExperience: 2,
    applications: 17,
  },
  {
    id: "4",
    name: "John Doe",
    position: "PSYCHOLOGIST",
    location: "Miami-FL",
    status: "AVAILABLE",
    age: 45,
    education: {
      degree: "Ph.D",
      field: "Psychology",
    },
    yearsExperience: 16,
    applications: 5,
  },
  {
    id: "5",
    name: "Luke Curtis",
    position: "FRONT-END DEVELOPER",
    location: "Austin-TX",
    status: "ON LOOKOUT",
    age: 25,
    education: {
      degree: "BA",
      field: "Computer Science",
    },
    yearsExperience: 1,
    applications: 173,
  },
  {
    id: "6",
    name: "Liliane Vaurg",
    position: "NEURO-SCIENTIST",
    location: "Boston-MA",
    status: "HIRED",
    age: 47,
    education: {
      degree: "Ph.D",
      field: "Neuro-Science",
    },
    yearsExperience: 17,
    applications: 2,
  },
  {
    id: "7",
    name: "Chris Handler",
    position: "ML ENGINEER",
    location: "Seattle-WA",
    status: "AVAILABLE",
    age: 37,
    education: {
      degree: "MSc",
      field: "Computer Science",
    },
    yearsExperience: 9,
    applications: 113,
  },
  {
    id: "8",
    name: "Joanne Teigen",
    position: "MARKETING & PR",
    location: "Boston-MA",
    status: "AVAILABLE",
    age: 29,
    education: undefined,
    yearsExperience: 5,
    applications: 19,
  },
];

const statusFilters = [
  "All Status",
  "All Locations",
  "All Degrees",
  "All Disciplines",
];
const Candidates = () => {
  const availableCandidates = mockCandidates.filter(
    (c) => c.status === "AVAILABLE"
  ).length;
  const hiredCandidates = mockCandidates.filter(
    (c) => c.status === "HIRED"
  ).length;
  const onLookoutCandidates = mockCandidates.filter(
    (c) => c.status === "ON LOOKOUT"
  ).length;

  return (
    <div className="min-h-screen flex flex-col">
      <div className=" mx-auto px-4 py-6 max-w-screen-xl">
        <Header />

        <main className="my-6">
          <div className="hidden md:flex justify-between mb-8">
            <div className="flex gap-0.5   shadow ">
              <StatsCard
                label={"AVAILABLE"}
                value={availableCandidates}
                className={"rounded-l-md "}
              />
              <StatsCard
                label={"HIRED"}
                value={hiredCandidates}
                className={" "}
              />
              <StatsCard
                label={"ON LOOKOUT"}
                value={onLookoutCandidates}
                className={"rounded-r-md"}
              />
            </div>

            <div className="flex gap-4 ">
              {statusFilters?.map((item, index) => (
                <CustomSelect
                  key={index}
                  handleChange={() => {}}
                  options={[]}
                  label={item}
                />
              ))}

              {/* <FilterButton label="By Latest" />
            <FilterButton label="All Status" />
            <FilterButton label="All Locations" />
            <FilterButton label="All Degrees" />
            <FilterButton label="All Disciplines" /> */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockCandidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                id={candidate.id}
                name={candidate.name}
                image={candidate.image}
                position={candidate.position}
                location={candidate.location}
                status={candidate.status}
                age={candidate.age}
                education={candidate.education}
                yearsExperience={candidate.yearsExperience}
                applications={candidate.applications}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="p-3 bg-teal-500 text-white rounded-l-xl hover:bg-teal-600 transition-colors">
              <WestIcon />
            </button>
            <button className="p-3 bg-teal-500 text-white rounded-r-xl hover:bg-teal-600 transition-colors ml-px">
              <EastIcon />
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Candidates;

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import JobDetails from "../pages/JobDetails/JobDetails";
import Candidates from "../pages/Candidates/Candidates";

// ==============================|| ROUTING RENDER ||============================== //

{

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/jobs/:id",
    element: <JobDetails />,
  },
  {
    path: "/candidates",
    element: <Candidates />,
  },
]);

export default router;

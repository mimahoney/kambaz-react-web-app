import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home/index.tsx";
import { Navigate, Route, Routes} from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa"
import PeopleTable from "./People/Table"

export default function Courses() {
  return (
    <div id="wd-courses" className="d-flex">

      <div className="d-none d-md-block flex-column">
        <CourseNavigation />
      </div>

      <div className="flex-fill">
        <h2 className="text-danger">
          <FaAlignJustify/>
          Course 1234
        </h2>
        <hr />

        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
          <Route path="People" element={<PeopleTable />} />
        </Routes>
      </div>
    </div>
  );
}



{/* <div id="wd-courses" className="d-flex min-vh-100">
      <h2>Course 1234</h2>
      <hr />
            <div className="d-none d-md-block flex-column">
            <CourseNavigation />
            </div>
            <div className="col"></div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<h2>Assignment Editor</h2>} />
              <Route path="People" element={<h2>People</h2>} />
            </Routes> */}
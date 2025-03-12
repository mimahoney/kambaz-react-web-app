import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home/index.tsx";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa"
import PeopleTable from "./People/Table"


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div className="d-flex flex-column">
          <h2 className="text-danger">
            <FaAlignJustify className="me-4 fs-4 mb-1" />
            {course && course.name} &gt; {pathname.split("/")[4]}
          </h2>
          <hr />
        
    <div id="wd-courses" className="d-flex flex-row"> 
      <div className="d-none d-md-flex flex-column p-3"> 
        <CourseNavigation />
      </div>

      <div className="d-flex flex-column flex-grow-1 p-4">
        
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
    </div>
  );
}



// export default function Courses() {
//   const { cid } = useParams();
//   const course = courses.find((course) => course._id === cid);
//   const { pathname } = useLocation();
//   return (
//     <div id="wd-courses" className="d-flex">

//       <div className="d-none d-md-block flex-column">
//         <h2 className="text-danger">
//         <FaAlignJustify className="me-4 fs-4 mb-1" />
//         {course && course.name} &gt; {pathname.split("/")[4]}
//       </h2>
//         <hr />
//         <div className="d-none d-md-block flex-row">
//         <CourseNavigation />
        
//         <Routes>
//           <Route path="/" element={<Navigate to="Home" />} />
//           <Route path="Home" element={<Home />} />
//           <Route path="Modules" element={<Modules />} />

//           {/* <Route path="Modules" element={<Modules />} />
//           <Route path="Courses/:cid/Modules" element={<Modules />} /> */}
//           <Route path="Assignments" element={<Assignments />} />
//           <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//           <Route path="People" element={<PeopleTable />} />
//         </Routes>
//         </div>
//         </div>
//       </div>
//     // </div>
//   );
// }



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
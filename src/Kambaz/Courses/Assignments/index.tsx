//import ModulesControls from "./Modules/ModulesControls"
import { BsGripVertical } from "react-icons/bs"
import AssignmentControlButtons from "./AssignmentControlButtons"
import { Button, Dropdown } from "react-bootstrap";
import AssignmentControl from "./AssignmentControl"
import { CiSearch } from "react-icons/ci";
import "./style.css"
//import ModuleControlButtons from "../../Modules/ModuleControlButtons";

import { ListGroup } from "react-bootstrap";


export default function Assignments() {
return (
<div id="wd-assignments" className="container">

<div id="search-buttons-top" className="d-flex justify-content-between align-items-center gap-2">

        <div className="search-assignment justify-content-start">
              <CiSearch />
              <input
                placeholder="Search for Assignments"
                id="wd-search-assignment"
                className="search-input"
              />
            </div>
        <div className = "right-aligned-buttons justify-content-end">
        <Button size="lg" className="me-1 float-end" id="wd-add-assignment-group" variant="outline-secondary">
        + Group
        </Button>
        <Button size="lg" className="me-1 float-end" id="wd-add-assignment" variant="danger">
        + Assignment
        </Button>
        </div>
    </div>


  {/* <AssignmentControl /><br /><br /><br /> */}
  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
        <BsGripVertical className="me-2 fs-3" /> Assignments 
        <span id="wd-assignments-percentage" className="border rounded-pill px-3 py-1 text-muted ms-auto">
          40% of Total
        </span>
        <AssignmentControl />
      </div>
      <ListGroup className="wd-lessons rounded-0 assignment-item">
        
        <ListGroup.Item className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold">
      A1 - ENV + HTML
      </a>
      <div className="d-flex align-items-center justify-content-between">
    <span className="text-muted">
      Multiple Modules | <b>Not available until </b>May 6th at 12:00am | 
      <b> Due</b> May 13th at 11:59pm | 100 pts
    </span>

  <AssignmentControlButtons />
</div>

      
        </ListGroup.Item>
        

        <ListGroup.Item className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold">
      A2 - CSS
      </a>
      <div className="d-flex align-items-center justify-content-between">
      <span className="text-muted">
        Multiple Modules | <b>Not available until </b>May 6th at 12:00am | 
        <b> Due</b> May 20th at 11:59pm | 100 pts
      </span>

  <AssignmentControlButtons />
</div>




        </ListGroup.Item>







        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /><a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold">
      A3 - JAVASCRIPT
      </a>
      <div className="d-flex align-items-center justify-content-between">
      <span className="text-muted">
        Multiple Modules | <b>Not available until </b>May 6th at 12:00am | 
        <b> Due</b> May 27th at 11:59pm | 100 pts
      </span>

  <AssignmentControlButtons />
</div>
      
      
      </ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>
  </ListGroup>
</div>


)}














// export default function Assignments() {
//     return (
//       <div id="wd-assignments" className="container">
//         <input placeholder="Search for Assignments"
//                id="wd-search-assignment" />
//         <button id="wd-add-assignment-group">+ Group</button>
//         <button id="wd-add-assignment">+ Assignment</button>
//         <h3 id="wd-assignments-title">
//           ASSIGNMENTS 40% of Total <button>+</button> </h3>




//         <ListGroup id="wd-assignment-list">

//         <ListGroup.Item className="wd-assignments-module p-0 mb-5 fs-5 border-gray">
//       <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold">
//       A1 - ENV + HTML
//       </a>
//       <p className="text-muted mb-0">
//       <p>Multiple Modules | <b>Not available until </b>May 6th at 12:00am | 
//             <b> Due</b> May 13th at 11:59pm | 100 pts</p>
//       </p>
//       <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold">
//       A2 - CSS + BOOTSTRAP
//       </a>
//       <p className="text-muted mb-0">
//       <p>Multiple Modules | <b>Not available until </b>May 13th at 12:00am | 
//             <b> Due</b> May 20th at 11:59pm | 100 pts</p>
//       </p>
//       <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link fw-bold">
//         A3 - JAVASCRIPT + REACT
//       </a>
//       <p className="text-muted mb-0">
//         Multiple Modules | <b>Not available until</b> May 20th at 12:00am |
//         <b> Due</b> May 27th at 11:59pm | 100 pts
//       </p>
//     </ListGroup.Item>



//   </ListGroup>
//       </div>
//   );}


  // <ul id="wd-assignment-list">
  //         <li className="wd-assignment-list-item">
  //           <a href="#/Kambaz/Courses/1234/Assignments/123"
  //              className="wd-assignment-link" >
  //             A1 - ENV + HTML
  //           </a> 
  //           <p>Multiple Modules | <b>Not available until </b>May 6th at 12:00am | 
  //           <b> Due</b> May 13th at 11:59pm | 100 pts</p>
  //           </li>


  //           <li className="wd-assignment-list-item">
  //           <a href="#/Kambaz/Courses/1234/Assignments/123"
  //              className="wd-assignment-link" >
  //             A2 - CSS + BOOTSTRAP
  //           </a> 
  //           <p>Multiple Modules | <b>Not available until </b>May 13th at 12:00am | 
  //           <b> Due</b> May 20th at 11:59pm | 100 pts</p>
  //           </li>
            

  //           <li className="wd-assignment-list-item">
  //           <a href="#/Kambaz/Courses/1234/Assignments/123"
  //              className="wd-assignment-link" >
  //             A3 - JAVASCRIPT + REACT
  //           </a> 
  //           <p>Multiple Modules | <b>Not available until </b>May 20th at 12:00am | 
  //           <b> Due</b> May 27th at 11:59pm | 100 pts</p>
  //           </li>

  //       </ul>

  // <div>
  // <ModulesControls /><br /><br /><br />
  // <ListGroup className="rounded-0" id="wd-wd-assignments">
  //   <ListGroup.Item className="wd-assignments-module p-0 mb-5 fs-5 border-gray">
  //     <div className="wd-title p-3 ps-2 bg-secondary">
  //       <BsGripVertical className="me-2 fs-3" /> Assignments <ModuleControlButtons />
  //     </div>
  //     <ListGroup className="wd-assignments rounded-0">
  //       <ListGroup.Item className="wd-assignment p-3 ps-1">
  //         <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
  //       </ListGroup.Item>
  //       <ListGroup.Item className="wd-assignment p-3 ps-1">
  //         <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
  //       </ListGroup.Item>
  //       <ListGroup.Item className="wd-assignment p-3 ps-1">
  //         Learn what is Web Development </ListGroup.Item>
  //     </ListGroup>
  //   </ListGroup.Item>
  //   <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
  //     <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
  //     <ListGroup className="wd-assignments rounded-0">
  //       <ListGroup.Item className="wd-assignment p-3 ps-1">
  //         LESSON 1 </ListGroup.Item>
  //       <ListGroup.Item className="wd-assignment p-3 ps-1">
  //         LESSON 2 </ListGroup.Item>
  //     </ListGroup>
  //   </ListGroup.Item>


// </div>
  
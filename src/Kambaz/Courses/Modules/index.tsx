import { Button } from "react-bootstrap";
import { PiDotsSixVerticalBold, PiDotsThreeVertical } from "react-icons/pi";
import GreenCheckmark from "./GreenCheckmark";
import "../../styles.css";  
import { FiPlus } from "react-icons/fi";
import ModulesControls from "./ModulesControls"
import { BsGripVertical } from "react-icons/bs"
import LessonControlButtons from "./LessonControlButtons"
import ModuleControlButtons from "./ModuleControlButtons"
import { ListGroup } from "react-bootstrap";

export default function Modules() {
return (
  <div>
  <ModulesControls /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
      </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroup.Item className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
        </ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
        </ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />Learn what is Web Development <LessonControlButtons /></ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
      <ListGroup className="wd-lessons rounded-0">
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />LESSON 1 <LessonControlButtons /> </ListGroup.Item> 
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />LESSON 2 <LessonControlButtons /></ListGroup.Item> 
        <ListGroup.Item className="wd-lesson p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />LESSON 3<LessonControlButtons /></ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>
  </ListGroup>
</div>


)}




// export default function Modules() {
//   return (
//     <div>
//       {/* Top Buttons */}
//       <div className="d-flex justify-content-between mb-3">
//         <div>
//           <Button className="course-modules-buttons me-2">Collapse All</Button>
//           <Button className="course-modules-buttons me-2">View Progress</Button>
//           <Button className="course-modules-buttons me-2">Publish All <GreenCheckmark /></Button>
//         </div>
//         <Button variant="danger"> + Module</Button>
//       </div>
//       <ModulesControls />


//       <ul id="wd-modules">

//         <li className="wd-module card mb-4">
//           <div className="wd-title card-header bg-secondary text-white d-flex"> <PiDotsSixVerticalBold/> Week 1 <GreenCheckmark/> <PiDotsThreeVertical /> <FiPlus /> </div> 
//           <ul className="wd-lessons list-group list-group-flush">
//             <li className="wd-lesson list-group-item">
//               <ul className="wd-content list-unstyled ps-3">
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> LEARNING OBJECTIVES <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> Introduction to the course <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> Learn what is Web Development <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </li>


//         <li className="wd-module card mb-4">
//           <div className="wd-title card-header bg-secondary text-white d-flex"> <PiDotsSixVerticalBold/> Week 2 <GreenCheckmark/> <PiDotsThreeVertical /> <FiPlus /> </div>
//           <ul className="wd-lessons list-group list-group-flush">
//             <li className="wd-lesson list-group-item">
//               <ul className="wd-content list-unstyled ps-3">
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> HTML OVERVIEW <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> What is HTML? <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> A1 <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> P1 <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </li>

  
//         <li className="wd-module card mb-4">
//           <div className="wd-title card-header bg-secondary text-white d-flex"> <PiDotsSixVerticalBold/> Week 3 <GreenCheckmark/> <PiDotsThreeVertical /> <FiPlus /> </div>
//           <ul className="wd-lessons list-group list-group-flush">
//             <li className="wd-lesson list-group-item">
//               <ul className="wd-content list-unstyled ps-3">
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> CSS OVERVIEW <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> What is CSS? <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> A1 <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//                 <li className="wd-content-item">
//                   <PiDotsSixVerticalBold className="me-2 text-muted" /> P1 <GreenCheckmark/> <PiDotsThreeVertical />
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }










//       {/* <div className="d-flex justify-content-between mb-3">
//         <div>
//           <Button className="course-modules-buttons me-2">Collapse All</Button>
//           <Button className="course-modules-buttons me-2">View Progress</Button>
//           <Button className="course-modules-buttons me-2">Publish All <GreenCheckmark /></Button>
//         </div>
//         <Button variant="danger"> + Module</Button>
//       </div>


//         <ul id="wd-modules">
//           <li className="wd-module card mb-4">
//             <div className="wd-title card-header bg-secondary text-white d-flex">Week 1</div>
//             <ul className="wd-lessons list-group list-group-flush">
//               <li className="wd-lesson list-group-item">
//                 <ul className="wd-content list-unstyled ps-3">
//                 <li className="wd-content-item">LEARNING OBJECTIVES</li>
//                   <li className="wd-content-item">Introduction to the course</li>
//                   <li className="wd-content-item">Learn what is Web Development</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>

//           <li className="wd-module card mb-4">
//             <div className="wd-title card-header bg-secondary text-white d-flex">Week 1</div>
//             <ul className="wd-lessons list-group list-group-flush">
//               <li className="wd-lesson list-group-item">
//                 <ul className="wd-content list-unstyled ps-3">
//                 <li className="wd-content-item">HTML OVERVIEW</li>
//                   <li className="wd-content-item">What is HTML?</li>
//                   <li className="wd-content-item">A1</li>
//                   <li className="wd-content-item">P1</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li className="wd-module card mb-4">
//             <div className="wd-title card-header bg-secondary text-white d-flex">Week 1</div>
//             <ul className="wd-lessons list-group list-group-flush">
//               <li className="wd-lesson list-group-item">
//                 <ul className="wd-content list-unstyled ps-3">
//                 <li className="wd-content-item">CSS OVERVIEW</li>
//                 <li className="wd-content-item">What is CSS?</li>
//                 <li className="wd-content-item">
//                 <PiDotsSixVerticalBold /> A1
//                 </li>
//                   <li className="wd-content-item">P1</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div> */}
  
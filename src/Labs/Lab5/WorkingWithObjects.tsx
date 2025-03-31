// import { useState } from "react";
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// export default function WorkingWithObjects() {
//   return (
//     <div id="wd-working-with-objects">
//       <h3>Working With Objects</h3>
//       <h4>Retrieving Objects</h4>
//       <a id="wd-retrieve-assignments" className="btn btn-primary"
//          href={`${REMOTE_SERVER}/lab5/assignment`}>
//         Get Assignment
//       </a><hr/>
//       <h4>Retrieving Properties</h4>
//       <a id="wd-retrieve-assignment-title" className="btn btn-primary"
//          href={`${REMOTE_SERVER}/lab5/assignment/title`}>
//         Get Title
//       </a><hr/>
//     </div>
// );}

import { useState } from "react";
import { FormControl, FormCheck } from 'react-bootstrap';
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [module, setModule] = useState({});
  const [moduleName, setModuleName] = useState("");
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`


  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      <h4>Modifying Properties</h4>

      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />

      <a id="wd-update-assignment-score"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <FormControl
        type="number"
        className="w-75 mb-3" id="wd-assignment-score" value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })}
      />

      <a id="wd-update-assignment-completed"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <FormCheck
        type="checkbox"
        label="Completed"
        className="mb-3" id="wd-assignment-completed" checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })}
      />

      <hr />

      <a
        id="wd-get-module"
        className="btn btn-primary"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          fetch(`${REMOTE_SERVER}/lab5/module`)
            .then((res) => res.json()) .then((data) => setModule(data));
        }}
      >
        Get Module
      </a><br />
      <a
        id="wd-get-module-name"
        className="btn btn-primary"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          fetch(`${REMOTE_SERVER}/lab5/module/name`)
            .then((res) => res.text()) .then((name) => setModuleName(name));
        }}
      >
        Get Module Name
      </a>

      <h5>Module:</h5>
      <pre>{JSON.stringify(module, null, 2)}</pre>

      <h5>Module Name:</h5>
      <div>{moduleName}</div>

    </div>
);}


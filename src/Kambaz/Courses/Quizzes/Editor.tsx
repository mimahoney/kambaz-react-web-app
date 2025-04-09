import { useEffect, useState } from "react";
import { Button, Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import * as quizClient from "./client.ts";
import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

export default function AssignmentEditor() {
  const { qid, cid } = useParams();
  const navigate = useNavigate();
  const [key, setKey] = useState("details"); // <-- Fix: missing key state

  const [quiz, setQuiz] = useState<any>({
    _id: uuidv4(),
    title: "",
    description: "",
    quizType: "Graded Quiz",
    points: 0,
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 20,
    multipleAttempts: false,
    showCorrectAnswers: "",
    accessCode: "",
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
    due: "",
    available: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    const loadQuiz = async () => {
      if (qid !== "new") {
        const existing = await quizClient.findQuiz(qid!);
        setQuiz(existing);
      }
    };
    loadQuiz();
  }, [qid]);

  const save = async () => {
    if (qid === "new") {
      await quizClient.createQuizForCourse(cid!, quiz);
      navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`);
    } else {
      await quizClient.updateQuiz(quiz);
      navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`);
    }
  };

  const saveAndPublish = async () => {
    await save();
    navigate(`/Kambaz/Courses/${cid}/Quizzes`);
  };

  const u = (key: string) => (e: any) =>
    setQuiz({ ...quiz, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  return (
    <Container>
      <div id="wd-quiz-editor">
        <Tabs
          activeKey={key}
          onSelect={(selectedKey) => {
            if (selectedKey) {
              setKey(selectedKey);
            } else {
              setKey("details");
            }
          }}
          className="mb-3"
        >
          <Tab eventKey="details" title="Details">
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control className="mb-2" id="title" value={quiz.title} onChange={u("title")} />

            <Form.Label htmlFor="description">Description</Form.Label>
            <ReactQuill
              id="description"
              className="w-100 mb-2"
              value={quiz.description}
              onChange={(value: any) => setQuiz({ ...quiz, description: value })}
            />

            <Row className="mb-2">
              <Col><Form.Label>Quiz Type</Form.Label></Col>
              <Col>
                <Form.Select value={quiz.quizType} onChange={u("quizType")}>
                  <option>Graded Quiz</option>
                  <option>Practice Quiz</option>
                  <option>Graded Survey</option>
                  <option>Ungraded Survey</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col><Form.Label>Assignment Group</Form.Label></Col>
              <Col>
                <Form.Select value={quiz.assignmentGroup} onChange={u("assignmentGroup")}>
                  <option>Quizzes</option>
                  <option>Exams</option>
                  <option>Assignments</option>
                  <option>Project</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col><Form.Label>Points</Form.Label></Col>
              <Col><Form.Control value={quiz.points} onChange={u("points")} type="number" /></Col>
            </Row>

            <Row className="mb-2">
              <Col><Form.Label>Options</Form.Label></Col>
              <Col><Form.Check label="Shuffle Answers" checked={quiz.shuffleAnswers} onChange={u("shuffleAnswers")} /></Col>
              <Col><Form.Control type="number" value={quiz.timeLimit} onChange={u("timeLimit")} placeholder="Time Limit (mins)" /></Col>
            </Row>

            <Form.Check label="Multiple Attempts" checked={quiz.multipleAttempts} onChange={u("multipleAttempts")} />
            <Form.Control className="mb-2" placeholder="Show Correct Answers" value={quiz.showCorrectAnswers} onChange={u("showCorrectAnswers")} />
            <Form.Control className="mb-2" placeholder="Access Code" value={quiz.accessCode} onChange={u("accessCode")} />
            <Form.Check label="One Question at a Time" checked={quiz.oneQuestionAtATime} onChange={u("oneQuestionAtATime")} />
            <Form.Check label="Webcam Required" checked={quiz.webcamRequired} onChange={u("webcamRequired")} />
            <Form.Check label="Lock Questions After Answering" checked={quiz.lockQuestionsAfterAnswering} onChange={u("lockQuestionsAfterAnswering")} />

            <Row className="mb-2 mt-2">
              <Col><Form.Label>Due Date</Form.Label></Col>
              <Col><Form.Control type="date" value={quiz.due} onChange={u("due")} /></Col>
            </Row>

            <Row className="mb-2">
              <Col><Form.Label>Available From</Form.Label></Col>
              <Col><Form.Control type="date" value={quiz.available} onChange={u("available")} /></Col>
              <Col><Form.Label>Until</Form.Label></Col>
              <Col><Form.Control type="date" value={quiz.availableUntil} onChange={u("availableUntil")} /></Col>
            </Row>

            <div className="d-flex justify-content-end mt-2">
              <Button className="me-2" variant="danger" onClick={save}>Save</Button>
              <Button className="me-2" variant="success" onClick={saveAndPublish}>Save and Publish</Button>
              <Button variant="outline-secondary" onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes`)}>Cancel</Button>
            </div>
          </Tab>

          <Tab eventKey="questions" title="Questions">

          </Tab>

        </Tabs>
      </div>
    </Container>
  );
}





// import { useEffect, useState } from "react";
// import { Button, Container, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import * as quizClient from "./client.ts";
// import ReactQuill from "react-quill";
// // import "react-quill/dist/quill.snow.css";
// // need to make edits

// export default function AssignmentEditor() {
//   const { qid, cid } = useParams();
//   const navigate = useNavigate();

//   //uuidv4
//   const [quiz, setQuiz] = useState<any>({
//     _id: uuidv4(),
//     title: "",
//     description: "",
//     quizType: "Graded Quiz",
//     points: 0,
//     assignmentGroup: "Quizzes",
//     shuffleAnswers: true,
//     timeLimit: 20,
//     multipleAttempts: false,
//     showCorrectAnswers: "",
//     accessCode: "",
//     oneQuestionAtATime: true,
//     webcamRequired: false,
//     lockQuestionsAfterAnswering: false,
//     due: "",
//     available: "",
//     availableUntil: "",
//     course: cid,
//   });

//   useEffect(() => {
//     const loadQuiz = async () => {
//       if (qid !== "new") {
//         const existing = await quizClient.findQuiz(qid!);
//         setQuiz(existing);
//       }
//     };
//     loadQuiz();
//   }, [qid]);

//   const save = async () => {
//     if (qid === "new") {
//       await quizClient.createQuizForCourse(cid!, quiz);
//       navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`);
//     } else {
//       await quizClient.updateQuiz(quiz);
//       navigate(`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`);
//     }
//   };

//   const saveAndPublish = async () => {
//     await save();
//     navigate(`/Kambaz/Courses/${cid}/Quizzes`);
//   };


//   const u = (key: string) => (e: any) => setQuiz({ ...quiz, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value });


//   return (
//     <Container>
//       <div id="wd-quiz-editor">
//       <Tabs
//             activeKey={key}
//             onSelect={(selectedKey) => {
//                 if (selectedKey) {
//                 setKey(selectedKey);
//                 } else {
//                 setKey("details");
//                 }
//             }}
//         className="mb-3"
//             >
//         <Tab eventKey="details" title="Details">
//         <Form.Label htmlFor="title">Title</Form.Label>

//         <Form.Control className="mb-2" id="title" value={quiz.title} onChange={u("title")} />

//         <Form.Label htmlFor="description">Description</Form.Label>
//         <ReactQuill id="description" className="w-100 mb-2" value={quiz.description} onChange={(value) => setQuiz({ ...quiz, description: value })} className="mb-2" />

//         <Row className="mb-2">
//             <Col><Form.Label>Quiz Type</Form.Label></Col>
//             <Col>
//               <Form.Select value={quiz.quizType} onChange={u("quizType")}>
//                 <option>Graded Quiz</option> <option>Practice Quiz</option> <option>Graded Survey</option> <option>Ungraded Survey</option>
//               </Form.Select>
//             </Col>
// </Row>

//             <Row className="mb-2">
//             <Col><Form.Label>Assignment Group</Form.Label></Col>
//             <Col>
//               <Form.Select value={quiz.assignmentGroup} onChange={u("assignmentGroup")}>
//                 <option>Quizzes</option> <option>Exams</option> <option>Assignments</option> <option>Project</option>
//               </Form.Select>
//     </Col>
//           </Row>

//           <Row className="mb-2">
//             <Col><Form.Label>Points</Form.Label></Col>
//             <Col><Form.Control value={quiz.points} onChange={u("points")} type="number" /></Col>
//           </Row>

//           <Row className="mb-2">
//           <Col><Form.Label>Options</Form.Label></Col>
//             <Col><Form.Check label="Shuffle Answers" checked={quiz.shuffleAnswers} onChange={u("shuffleAnswers")} /></Col>
//             <Col><Form.Control type="number" value={quiz.timeLimit} onChange={u("timeLimit")} placeholder="Time Limit (mins)" /></Col>
//           </Row>


//           <Form.Check label="Multiple Attempts" checked={quiz.multipleAttempts} onChange={u("multipleAttempts")} />
//           <Form.Control className="mb-2" placeholder="Show Correct Answers" value={quiz.showCorrectAnswers} onChange={u("showCorrectAnswers")} />

//           <Form.Control className="mb-2" placeholder="Access Code" value={quiz.accessCode} onChange={u("accessCode")} />
//           <Form.Check label="One Question at a Time" checked={quiz.oneQuestionAtATime} onChange={u("oneQuestionAtATime")} />
//           <Form.Check label="Webcam Required" checked={quiz.webcamRequired} onChange={u("webcamRequired")} />
//           <Form.Check label="Lock Questions After Answering" checked={quiz.lockQuestionsAfterAnswering} onChange={u("lockQuestionsAfterAnswering")} />

//           <Row className="mb-2 mt-2">
//             <Col><Form.Label>Due Date</Form.Label></Col>
//             <Col><Form.Control type="date" value={quiz.due} onChange={u("due")} /></Col>
//           </Row>

//           <Row className="mb-2">
//             <Col><Form.Label>Available From</Form.Label></Col>
//             <Col><Form.Control type="date" value={quiz.available} onChange={u("available")} /></Col>
//             <Col><Form.Label>Until</Form.Label></Col>
//             <Col><Form.Control type="date" value={quiz.availableUntil} onChange={u("availableUntil")} /></Col>
//           </Row>

//           <div className="justify-content-end mt-2">
//         <Button className="me-2" variant="danger" onClick={save}>Save</Button>
//         <Button className="me-2" variant="success" onClick={saveAndPublish}>Save and Publish</Button>
//         <Button variant="outline-secondary" onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes`)}>Cancel</Button>
//           </div>
//         </Tab>
//         </Tabs>
//       </div>
//     </Container>
//   );
// }



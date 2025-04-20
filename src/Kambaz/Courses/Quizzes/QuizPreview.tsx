import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as quizClient from "./client";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function QuizPreview() {
  const { qid, cid } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      if (qid) {
        const q = await quizClient.findQuiz(qid);
        const qs = await quizClient.findQuestionsForQuiz(qid);
        setQuiz(q);
        setQuestions(qs);
      }
    };
    loadData();
  }, [qid]);

  const handleChange = (id: string, value: any) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = () => {
    let total = 0;
    for (let q of questions) {
      const a = answers[q._id];
      if (q.type === "mcq") {
        const correct = q.answers.findIndex((ans: any) => ans.isCorrect);
        if (a === correct) total += q.points;
      } else if (q.type === "tf") {
        if (a === q.answer) total += q.points;
      } else if (q.type === "fitb") {
        if (a?.toLowerCase().trim() === q.answer.toLowerCase().trim()) {
          total += q.points;
        }
      }
    }
    setScore(total);
    setSubmitted(true);
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>{quiz.title}</h2>
        <Button onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/${qid}`)}>
          Edit Quiz
        </Button>
      </div>

      <p>{quiz.description}</p>

      {submitted && (
       <div>
          <strong>{score}</strong> / <strong>{quiz.points}</strong> points.
          </div>
      )}

      {questions.map((q, idx) => (
        <div key={q._id} className="border rounded p-3 mb-3">
          <h5>{idx + 1}. {q.qtitle}</h5>
          <div dangerouslySetInnerHTML={{ __html: q.question_text }} />

          {q.type === "mcq" &&
            q.answers.map((a: any, i: number) => (
              <Form.Check
                key={i}
                type="radio"
                name={q._id}
                label={a.text}
                disabled={submitted}
                checked={answers[q._id] === i}
                onChange={() => handleChange(q._id, i)}
              />
            ))}

          {q.type === "tf" && (
            <>
              <Form.Check
                type="radio"
                label="True"
                name={q._id}
                disabled={submitted}
                checked={answers[q._id] === true}
                onChange={() => handleChange(q._id, true)}
              />
              <Form.Check
                type="radio"
                label="False"
                name={q._id}
                disabled={submitted}
                checked={answers[q._id] === false}
                onChange={() => handleChange(q._id, false)}
              />
            </>
          )}

          {q.type === "fitb" && (
            <Form.Control
              type="text"
              disabled={submitted}
              value={answers[q._id] || ""}
              onChange={(e) => handleChange(q._id, e.target.value)}
              className="mt-2"
              placeholder="Type your answer"
            />
          )}

          {submitted && (
            <div className="mt-2">
              {(() => {
                const a = answers[q._id];
                let correct = false;
                if (q.type === "mcq") {
                  const correctIdx = q.answers.findIndex((a: any) => a.isCorrect);
                  correct = a === correctIdx;
                } else if (q.type === "tf") {
                  correct = a === q.answer;
                } else if (q.type === "fitb") {
                  correct = a?.toLowerCase().trim() === q.answer.toLowerCase().trim();
                }
                return (
                  <span className={correct ? "text-success" : "text-danger"}>
                    {correct ? "Correct" : `Incorrect (Answer: ${q.type === "mcq" ? q.answers.find((a: any) => a.isCorrect)?.text : q.answer})`}
                  </span>
                );
              })()}
            </div>
          )}
        </div>
      ))}

      {!submitted && (
        <Button variant="success" onClick={handleSubmit}>
          Submit Preview
        </Button>
      )}
    </Container>
  );
}



// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import * as quizClient from "./client";
// import { Button, Form, Container } from "react-bootstrap";

// export default function QuizPreview() {
//   const { qid, cid } = useParams();
//   const [quiz, setQuiz] = useState<any>(null);
//   const [questions, setQuestions] = useState<any[]>([]);
//   const [answers, setAnswers] = useState<Record<string, any>>({});

//   useEffect(() => {
//     const loadQuizData = async () => {
//       if (qid) {
//         const quizData = await quizClient.findQuiz(qid);
//         const quizQuestions = await quizClient.findQuestionsForQuiz(qid);
//         setQuiz(quizData);
//         setQuestions(quizQuestions);
//       }
//     };
//     loadQuizData();
//   }, [qid]);

//   const handleChange = (qid: string, value: any) => {
//     setAnswers({ ...answers, [qid]: value });
//   };

//   const handleSubmit = () => {
//     console.log("Submitted Answers:", answers);
//     alert("Quiz submitted");
//     // Optional: send to backend
//   };

//   return (
//     <Container className="p-4">
//       {!quiz ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           <h2>{quiz.title}</h2>
//           <p>{quiz.description}</p>
  
//           {questions.map((q, n) => (
//             <div key={q._id} className="border p-3 my-3 rounded bg-light">
//               <h5>{n + 1}. {q.qtitle}</h5>
//               <div dangerouslySetInnerHTML={{ __html: q.question_text }} />
  
//               {q.type === "mcq" && (
//                 <Form.Group className="mt-2">
//                   {q.answers.map((a: any, idx: number) => (
//                     <Form.Check
//                       key={idx}
//                       type="radio"
//                       label={a.text}
//                       name={q._id}
//                       checked={answers[q._id] === idx}
//                       onChange={() => handleChange(q._id, idx)}
//                     />
//                   ))}
//                 </Form.Group>
//               )}
  
//               {q.type === "tf" && (
//                 <Form.Group className="mt-2">
//                   <Form.Check
//                     type="radio"
//                     label="True"
//                     name={q._id}
//                     checked={answers[q._id] === true}
//                     onChange={() => handleChange(q._id, true)}
//                   />
//                   <Form.Check
//                     type="radio"
//                     label="False"
//                     name={q._id}
//                     checked={answers[q._id] === false}
//                     onChange={() => handleChange(q._id, false)}
//                   />
//                 </Form.Group>
//               )}
  
//               {q.type === "fitb" && (
//                 <Form.Group className="mt-2">
//                   <Form.Control
//                     placeholder="Type your answer..."
//                     value={answers[q._id] || ""}
//                     onChange={(e) => handleChange(q._id, e.target.value)}
//                   />
//                 </Form.Group>
//               )}
  
//             </div>
//           ))}
  
//           <Button variant="success" onClick={handleSubmit}>
//             Submit Quiz
//           </Button>
//         </>
//       )}
//     </Container>
//   );
//               }  

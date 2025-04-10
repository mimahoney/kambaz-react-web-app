import { BsGripVertical } from "react-icons/bs";
import QuizControlButtons from "./QuizControlButtons";
import { Button } from "react-bootstrap";
import QuizControl from "./QuizControl";
import { CiSearch } from "react-icons/ci";
import { Link, useParams, useNavigate } from "react-router-dom";
// import "./style.css";
import * as quizClient from "./client.ts";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";

export default function Quizzes() {
  const { cid } = useParams();
  const n = useNavigate();
  const [quizzes, setQuizzes] = useState<any[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const courseQuizzes = await quizClient.findQuizzesForCourse(cid!);
        if (Array.isArray(courseQuizzes)) {
          setQuizzes(courseQuizzes);
        } else {
          console.error("Expected an array but got:", courseQuizzes);
          setQuizzes([]);
        }
      } catch (err) {
        console.error("Failed to fetch quizzes:", err);
        setQuizzes([]);
      }
    };
    fetchQuizzes();
  }, [cid]);

  const deleteQuiz = async (quizId: string) => {
    if (window.confirm("Are you sure you'd like to delete?")) {
      await quizClient.deleteQuiz(quizId);
      setQuizzes(quizzes.filter((q) => q._id !== quizId));
    }
  };

  return (
    <div id="wd-quizzes" className="container">
      <div id="search-buttons-top" className="d-flex justify-content-between align-items-center gap-2">
        <div className="search-quiz justify-content-start">
          <CiSearch />
          <input
            placeholder="Search for Quizzes"
            id="wd-search-quiz"
            className="search-input"
          />
        </div>
        <div className="right-aligned-buttons justify-content-end">
          <Button size="lg" className="me-1 float-end" id="wd-add-quiz-group" variant="outline-secondary">
            + Group
          </Button>
          <Button size="lg" className="me-1 float-end" id="wd-add-quiz" variant="danger" onClick={() => n(`/Kambaz/Courses/${cid}/Quizzes`)}>
            + Quiz
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /> Quizzes
            <span id="wd-quizzes-percentage" className="border rounded-pill px-3 py-1 text-muted ms-auto">
              20% of Total
            </span>
            <QuizControl />
          </div>
          <ListGroup className="wd-lessons rounded-0 quiz-item">
            {Array.isArray(quizzes) && quizzes.map((quiz) => (
              <ListGroup.Item key={quiz._id} className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Link
                  to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`}
                  className="wd-quiz-link fw-bold"
                >
                  {quiz.title}
                </Link>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="text-muted">
                    <span className="text-danger">{quiz.module}</span> | <b>Available: </b>
                    {quiz.available} | <b> Due:</b> {quiz.due} | {quiz.points} pts
                  </span>
                  <Button variant="danger" onClick={() => deleteQuiz(quiz._id)}>
                    <FaTrash />
                  </Button>
                  <QuizControlButtons />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
